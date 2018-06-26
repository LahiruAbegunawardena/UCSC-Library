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

  constructor(
    private auth: AuthService
  ) { }

  bookData:any;
  

  ngOnInit() {
    this.getData();

   

    
  }

  getData(){
    this.auth.getBookDet().subscribe(res=>{
      console.log(res.book_details);
      this.bookData = res.book_details
      //console.log(res.book_details[1]);

    });
  }

  requestBk(item:any){
    this.display="block";
  }

  onCloseHandled(){
    this.display = "none";
  }

}
