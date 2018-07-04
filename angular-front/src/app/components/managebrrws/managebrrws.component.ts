import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { format } from 'util';
import { DatePipe } from '@angular/common';
import { FlashMessage } from 'angular-flash-message';
import { stringify } from 'querystring';


import * as jsPDF from 'jspdf';
import 'jspdf-autotable';


@Component({
  selector: 'app-managebrrws',
  templateUrl: './managebrrws.component.html',
  styleUrls: ['./managebrrws.component.css']
})
export class ManagebrrwsComponent implements OnInit {

  borrwrqstdet:any;
  CurDate:any;
  brwdet:any;

  brwrqstId:any;

  status = false;

  borrowdet = {
    username:'',
    bookname:'',
    isbn_no:'',
    takendate:'',
    duedate:''
  } 
  
  rslv_borrowdet = {
    borw_id:'',
    username:'',
    bookname:'',
    isbn_no:'',
    takendate:'',
    returneddate:'',
    duedate:'',
    fine:'',
    status:'not paid'
  }

  updt_brrwdet = {

    _id:'',
    duedate:''
  }

  constructor(
    private authService:AuthService,
    private flashMessage:FlashMessage
  ) { }

  display:any;
  display2:any;
  display3:any;
  display4:any;
  display5:any;

  ngOnInit() {
    
    this.getBkReqData();
  }

  brwRqstDetails(){
    
    this.display='block';
  }

  oncloseEdit(){
    this.display='none';
  }

  showBkrqst(){
    this.authService.getAllBookRequest().subscribe(res=>{
      console.log(res.req_details);

      this.borrwrqstdet = res.req_details;
      console.log(this.borrwrqstdet);

    });
  }

  reslvBkRqst(brw_req:any){
    

    var d = new Date();
    var m = d.getMonth(), month='', dt='';

    this.CurDate =  d.getFullYear() + '-' + month + '-' + d.getDate();

    if((m+1)<10){
      month="0"+(m+1).toString();
    }else{
      month = (m+1).toString();
    }
    
    if((d.getDate())<10){
      dt="0"+(d.getDate()).toString();
    }else{
      dt = (d.getDate()).toString();
    }

    const cur_date = d.getFullYear() + '-' + month + '-' + dt;

    this.borrowdet.bookname=brw_req.bookname;
    this.borrowdet.duedate = brw_req.duedate;
    this.borrowdet.isbn_no = brw_req.isbn_no;
    this.borrowdet.takendate = cur_date;
    this.borrowdet.username = brw_req.username;
    console.log(this.borrowdet);

    this.oncloseEdit();

    this.showCnfrmBkRequest(brw_req);
    
    
  }

  onCloseHandled2(){
    this.display2='none';
  }

  showCnfrmBkRequest(brw_req:any){
    this.display2='block';
    this.brwrqstId = brw_req;
  }

  setBorrow(){
    this.status = true;
    console.log(this.borrowdet);

    //insert into borrowed det table 

    this.authService.setBorrowDet(this.borrowdet).subscribe(res=>{
      console.log(res);
    });

    //delete from bk request table
    
    this.deleteBkRequest(this.brwrqstId);

    this.flashMessage.success('Book borrowed successfully..', {
      delay: 1500,
      successClass: 'success',
      close: true,
      //closeBtnClass: 'class1 class2',
      navigate: '/admnbook'
    });
    this.onCloseHandled2();
  }


  deleteBkRequest(dltitem:any){
    this.authService.deleteBrwReq(dltitem).subscribe(res=>{
      console.log(res);
    });

    this.flashMessage.success('Book request deleted successfully..', {
      delay: 1500,
      successClass: 'success',
      close: true,
      //closeBtnClass: 'class1 class2',
      navigate: '/'
    });
  }

  getBkReqData(){

    this.showBkrqst();

    this.authService.getBookBorrowDet().subscribe(res=>{
      console.log(res);
      this.brwdet = res.Borrow_details;
      //console.log(res.book_details[1]);
    });
  }

  editBrwDet(item:any){

    this.updt_brrwdet._id = item._id;
    this.updt_brrwdet.duedate = item.duedate;
    this.display3 = "block";
  }

  onCloseHandled3(){
    this.display3='none';
  }

  updtBorrow(){
    console.log(this.updt_brrwdet);

    this.authService.editBorrowdet(this.updt_brrwdet).subscribe(res=>{

      this.flashMessage.success('Borrow details edited Successfully..', {
        delay: 1500,
        successClass: 'success',
        close: true,
        //closeBtnClass: 'class1 class2',
        navigate: '/'
      });
    });
    this.onCloseHandled3();
  }

  rslvBorrw(itm){

    var today = new Date();
    var today_dy = today.getDate(), today_mnt = (today.getMonth()+1), today_yr = today.getFullYear();
    var due = new Date(itm.duedate);
    var due_dy = due.getDate(), due_mnt = (due.getMonth()+1), due_yr = due.getFullYear();

    //var today_dy = 1, today_mnt = 6, today_yr = 2018;
    //var due_dy = 30, due_mnt = 9, due_yr = 2015;


    var finalgap =0;
    var gapday = 0, gapmnt=0, gapyr=0;

    if(today_dy>=due_dy){
      gapday = today_dy-due_dy;

      if(today_mnt>=due_mnt){
        gapmnt = (today_mnt-due_mnt);

        if(today_yr>=due_yr){
          gapyr =(today_yr-due_yr);
        }else{
          gapyr = 0; gapmnt=0; gapday=0;
          finalgap = -1;
        }
      }else{
        gapmnt = (12 + today_mnt-due_mnt);
        today_yr = today_yr-1;    
        
        if(today_yr>=due_yr){
          gapyr =(today_yr-due_yr);
        }else{
          gapyr = 0; gapmnt=0; gapday=0;
          finalgap = -1;
        }
        
      }
    }else{
      gapday = 30 + today_dy - due_dy;
      today_mnt = today_mnt-1;

      if(today_mnt>=due_mnt){
        gapmnt = (today_mnt-due_mnt);

        if(today_yr>=due_yr){
          gapyr =(today_yr-due_yr);
        }else{
          gapyr = 0; gapmnt=0; gapday=0;
          finalgap = -1;
        }
      }else{
        gapmnt = (12 + today_mnt-due_mnt);
        today_yr = today_yr-1;    
        
        if(today_yr>=due_yr){
          gapyr =(today_yr-due_yr);
        }else{
          gapyr = 0; gapmnt=0; gapday=0;
          finalgap = -1;
        }
        
      }
    }

   if(finalgap==-1){
     finalgap = 0;
   }else{
     finalgap = gapday + (gapmnt*30) + (gapyr*365);
   }

    console.log("gap "+finalgap);
    console.log("gapday "+gapday + " gapmnt "+ gapmnt + " gapyr " + gapyr);

    var month='', dt='';

    if((today_mnt+1)<10){
      month = "0"+(today_mnt+1).toString();
    }else{
      month = (today_mnt+1).toString();
    }
    
    if(today_dy<10){
      dt = "0"+today_dy.toString();
    }else{
      dt = today_dy.toString();
      
    }

    this.rslv_borrowdet.borw_id = itm._id;
    this.rslv_borrowdet.username = itm.username;
    this.rslv_borrowdet.bookname = itm.bookname;
    this.rslv_borrowdet.isbn_no = itm.isbn_no;
    this.rslv_borrowdet.takendate = itm.takendate;
    this.rslv_borrowdet.duedate = itm.duedate;
    this.rslv_borrowdet.returneddate = (today.getFullYear()).toString()+"-"+month+"-"+dt;
    this.rslv_borrowdet.fine = (finalgap*5).toString() + ".00";
    this.rslv_borrowdet.status = "not paid";

    if(finalgap==0){
      this.rslv_borrowdet.status = "zero charge";
    }

    this.display4 = "block";

  }

  onCloseHandled4(){
    this.display4='none';
  }

  checkFines(){
    this.onCloseHandled4();
    this.display5 = "block";
  }

  onCloseHandled5(){
    this.display5='none';
  }
  
  resolveIt(){
    console.log(this.rslv_borrowdet);

    this.authService.addRslvdBrw(this.rslv_borrowdet).subscribe(res=>{
      //console.log(res);

      this.deleteFromBorrows(this.rslv_borrowdet);

      

    });

    

    
    this.onCloseHandled5();
  }

  deleteFromBorrows(rslv:any){
    this.authService.deleteBrwDet(this.rslv_borrowdet).subscribe(res=>{

      console.log(res);

      
      
    });

    this.flashMessage.success('Borrowed details resolved Successfully..', {
      delay: 1500,
      //successClass: 'success',
      close: true,
      //closeBtnClass: 'class1 class2',
      navigate: '/'
    });
  }

  dwnload(){

    var today = new Date();
    var today_dy = today.getDate(), today_mnt = (today.getMonth()+1), today_yr = today.getFullYear();

    var date = today_yr + "_" + today_mnt + "_" + today_dy;
    var date1 = today_yr + "-" + today_mnt + "-" + today_dy;
    //var datenm = today_yr + "" + today_mnt + "-" + today_dy;

    var rows =[];

    var i=0;
    for(let x of this.brwdet){
      var insiderow =[];

      
      insiderow.push(this.brwdet[i].username);
      insiderow.push(this.brwdet[i].bookname);
      insiderow.push(this.brwdet[i].isbn_no);
      insiderow.push(this.brwdet[i].takendate);
      insiderow.push(this.brwdet[i].duedate);  

      i=i+1;
      rows.push(insiderow);
    }
    
    const doc = new jsPDF(
      {orientation: 'landscape'}
    );
    //var cols = ["paying id", "borrow id", "username", "fine"];
    let cols = ["Username",	"Book Name", "ISBN No", "Taken Date",	"Due Date"];

    doc.autoTable(cols,rows);    
    doc.text(10, 10, "Report on Borrowed Details: " + date1);
    
    doc.save('Borrow_Details'+date+'.pdf');
  }

}
