import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessage } from 'angular-flash-message';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-adminfines',
  templateUrl: './adminfines.component.html',
  styleUrls: ['./adminfines.component.css']
})
export class AdminfinesComponent implements OnInit {

  display:any;

  constructor(
    private auth:AuthService,
    private flashMessage:FlashMessage
  ) { }

  rslvdData:any;
  unpaiddData:any;

  ngOnInit() {
    this.showAllRslved();
  }

  showAllRslved(){
    this.auth.ShowAllRslvedBrw().subscribe(res=>{
     // console.log(res.book_details);
      this.rslvdData = res.rslvd_details;
      console.log(this.rslvdData);
    });
  }

  showAllUnpaid(){
    this.auth.ShowAllUnPaid().subscribe(res=>{
     // console.log(res.book_details);
      this.unpaiddData = res.unpaid;
      console.log(this.unpaiddData);
    });
  }

  unpaid(){
    this.showAllUnpaid();
    this.display = "block";
  }

  oncloseEdit(){
    this.display = "none";
  }

  pay(item:any){

    this.auth.updateUnpaid(item).subscribe(res=>{
       console.log(res);
       this.flashMessage.success('Paid details updated..', {
        delay: 1500,
        successClass: 'success',
        close: true,
        //closeBtnClass: 'class1 class2',
        navigate: '/'
      });
     });
  }

  dwnload(){

    var today = new Date();
    var today_dy = (today.getDate()+1), today_mnt = (today.getMonth()+1), today_yr = (today.getFullYear()+1);

    var date = today_yr + "-" + today_mnt + "-" + today_dy;
    //var datenm = today_yr + "" + today_mnt + "-" + today_dy;

    var rows =[];

    var i=0;
    for(let x of this.rslvdData){
      var insiderow =[];
      insiderow.push(this.rslvdData[i].username);
      insiderow.push(this.rslvdData[i].fine);
      insiderow.push(this.rslvdData[i].status);

      i=i+1;
      rows.push(insiderow);
    }
    
  
    

    const doc = new jsPDF();
    //var cols = ["paying id", "borrow id", "username", "fine"];
    let cols = ["username", "fine", "status"];

    doc.autoTable(cols,rows);    
    doc.text(10, 10, "Fine Details - " + date);
    doc.save(date+'.pdf');
  }

}
