import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { format } from 'util';
import { DatePipe } from '@angular/common';
import { FlashMessage } from 'angular-flash-message';

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
    duedate:'',
    fine:'0.00'
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
    var m = d.getMonth(), month='';

    this.CurDate =  d.getFullYear() + '-' + month + '-' + d.getDate();

    if(m<10){
      month="0"+(m+1).toString();
    }else{
      month = (m+1).toString();
    }
    const cur_date = d.getFullYear() + '-' + month + '-' + d.getDate();

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

    this.rslv_borrowdet.borw_id = itm._id;
    this.rslv_borrowdet.username = itm.username;
    this.rslv_borrowdet.bookname = itm.bookname;
    this.rslv_borrowdet.isbn_no = itm.isbn_no;
    this.rslv_borrowdet.takendate = itm.takendate;
    this.rslv_borrowdet.duedate = itm.duedate;

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
    this.onCloseHandled5();
  }

}
