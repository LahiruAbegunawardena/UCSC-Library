import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  //inorder to take size and store on on arrAY

  display:any;
  size = 0;
  public myarr=[];

  bk_rqst = {
    username:'',
    bookname:'',
    //duedate:'',
    //takendate:'',
    status:'',
    isbn_no:''
  }

  constructor(
    private auth: AuthService
  ) { }

  bookData:any;
  loggedUserData:any;



  ngOnInit() {
    this.getData();

    this.auth.getUserProfileDet().subscribe(res=>{
      console.log("user data : ");

      this.loggedUserData = res.data;
      console.log(this.loggedUserData);

      

    });
   

    
  }

  getData(){
    this.auth.getBookDet().subscribe(res=>{
      console.log(res.book_details);
      this.bookData = res.book_details
      //console.log(res.book_details[1]);

    });
  }

  requestBk(item:any){
    this.bk_rqst.username=this.loggedUserData.username;
    this.bk_rqst.bookname=item.bookname;
    this.bk_rqst.isbn_no=item.isbn_no;
    this.bk_rqst.status="pending";

    
    
    this.display="block";
  }

  onCloseHandled(){
    this.display = "none";

    this.bk_rqst.bookname='';
    this.bk_rqst.isbn_no='';
    this.bk_rqst.status='';
    this.bk_rqst.username='';

  }

  cnfrmRqst(){
    this.auth.requestBorrowbk(this.bk_rqst).subscribe(res=>{
      console.log(res);
      
    });

    this.onCloseHandled();
  }

}
