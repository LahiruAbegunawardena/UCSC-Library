import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {FlashMessage} from 'angular-flash-message';

@Component({
  selector: 'app-admnbooks',
  templateUrl: './admnbooks.component.html',
  styleUrls: ['./admnbooks.component.css']
})
export class AdmnbooksComponent implements OnInit {

  bookData:any;
  display='none';
  display2='none';
  display3='none';

  dltID:any;
  subList:any;

  bookdet = {
    bookname:'',
    authorname:'',
    subject:'',
    //copies:'',
    isbn_no:'',
    publication:''
  };
  updt_bookdet = {
    _id:'',
    bookname:'',
    authorname:'',
    subject:'',
    //copies:'',
    isbn_no:'',
    publication:''
  };

  constructor(
    private auth:AuthService,
    private flashMessage:FlashMessage
  ) {}

  ngOnInit() {
    this.getData();
  }

  //..............get book details when page load.................

  getData(){
    this.auth.getBookDet().subscribe(res=>{
      console.log(res.book_details);
      this.bookData = res.book_details
      //console.log(res.book_details[1]);
    });
  }

  //.......................add book functionality..............

  addBooks(){
    this.loadSubs();
    this.display="block";
  }
  onCloseHandled(){
    this.display = "none";
  }

  addnewBook(){
    console.log(this.bookdet);

    const books_det = {
      bookname:this.bookdet.bookname,
      authorname:this.bookdet.authorname,
      subject:this.bookdet.subject,
      publication:this.bookdet.publication,
      isbn_no:this.bookdet.isbn_no
    };
    console.log(books_det);

    this.auth.registerBook(books_det).subscribe(res=>{
      console.log(res);

      
      
      this.flashMessage.success('Book added Successfully..', {
        delay: 1500,
        successClass: 'success',
        close: true,
        //closeBtnClass: 'class1 class2',
        navigate: '/mngborrow'
      });
    });

    this.onCloseHandled();
  }

  //.......................edit book functionality..............


  openEdtBk(item:any){

    this.updt_bookdet._id = item._id;
    this.updt_bookdet.authorname = item.authorname;
    this.updt_bookdet.bookname = item.bookname;
    //this.updt_bookdet.copies = item.copies;
    this.updt_bookdet.isbn_no = item.isbn_no;
    this.updt_bookdet.subject = item.subject;
    this.updt_bookdet.publication = item.publication;

    console.log("open edit book");
    console.log(item);
    this.display2="block";
  }

  onCloseHandled2(){
    this.display2 = "none";
  }
  editMyBook(){
    console.log("in ts file..");
    console.log(this.updt_bookdet);
    //console.log(updtdet);

    //this.auth.editMyBook(this.updt_bookdet);
    
    
    this.auth.editMyBook(this.updt_bookdet).subscribe(res=>{

      this.flashMessage.success('Book edited Successfully..', {
        delay: 1500,
        successClass: 'success',
        close: true,
        //closeBtnClass: 'class1 class2',
        navigate: '/'
      });
    });

    


    this.onCloseHandled2();
  }

  //......................delete book functionality..............


  shwDlt(id:any){
    this.dltID = id;
    this.display3="block";
  }
  onCloseHandled3(){
    this.display3 = "none";
  }

  deleteIt(){

    this.auth.deleteBook(this.dltID).subscribe(res=>{

      console.log(res);

      this.flashMessage.success('Book deleted Successfully..', {
        delay: 1500,
        //successClass: 'success',
        close: true,
        //closeBtnClass: 'class1 class2',
        navigate: '/'
      });
      
    });

    this.onCloseHandled3();
  }

  loadSubs(){
    this.auth.showAllSub().subscribe(res=>{

      this.subList = res.subjects;
      console.log(this.subList);
      
      
    });
  }
  

}
