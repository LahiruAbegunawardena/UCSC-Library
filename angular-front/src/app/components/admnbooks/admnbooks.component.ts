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

  bookdet = {
    bookname:'',
    authorname:'',
    subject:'',
    //copies:'',
    isbn_no:''
  };
  updt_bookdet = {
    bookname:'',
    authorname:'',
    subject:'',
    //copies:'',
    isbn_no:''
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
     // copies:this.bookdet.copies,
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
        navigate: '/'
      });
    });

    this.onCloseHandled();
  }

  //.......................edit book functionality..............


  openEdtBk(item:any){
    this.updt_bookdet.authorname = item.authorname;
    this.updt_bookdet.bookname = item.bookname;
    //this.updt_bookdet.copies = item.copies;
    this.updt_bookdet.isbn_no = item.isbn_no;
    this.updt_bookdet.subject = item.subject;

    console.log(this.updt_bookdet);
    console.log(item);
    this.display2="block";
  }

  onCloseHandled2(){
    this.display2 = "none";
  }
  editBook(){
    console.log(this.updt_bookdet);
    this.onCloseHandled2();
  }

  //......................delete book functionality..............


  shwDlt(){
    this.display3="block";
  }
  onCloseHandled3(){
    this.display3 = "none";
  }

}
