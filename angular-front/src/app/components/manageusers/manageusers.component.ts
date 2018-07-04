import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessage } from 'angular-flash-message';

import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.css']
})
export class ManageusersComponent implements OnInit {

  userData:any; 
  dltItm:any;
  display:any;

  constructor(
    private auth:AuthService,
    private flashMessage:FlashMessage
  ) { }

  ngOnInit() {
    this.getUserData();
  }

  getUserData(){
    this.auth.getallUserDet().subscribe(res=>{
      console.log(res);
      this.userData = res.user_details
      //console.log(res.book_details[1]);
    });
  }

  shwDlt(item:any){
    this.dltItm = item;
    this.display = "block";
  }

  onCloseHandled(){
    this.display = "none";
  }

  deleteIt(){
    this.auth.deleteUser(this.dltItm).subscribe(res=>{

      
        this.flashMessage.success('User deleted Successfully..', {
          delay: 1500,
          //successClass: 'success',
          close: true,
          //closeBtnClass: 'class1 class2',
          navigate: '/mngborrow'
        });

     /** }else{
        this.flashMessage.danger('User deletion failed..', {
          delay: 1500,
         // successClass: 'success',
          close: true,
          //closeBtnClass: 'class1 class2',
          navigate: '/mnguser'
        });
      }**/

      
    });

    this.onCloseHandled();
  }

  dwnload(){

    var today = new Date();
    var today_dy = today.getDate(), today_mnt = (today.getMonth()+1), today_yr = today.getFullYear();

    var date1 = today_yr + "-" + today_mnt + "-" + today_dy;
   var date = today_yr + "_" + today_mnt + "_" + today_dy;

    //var datenm = today_yr + "" + today_mnt + "-" + today_dy;

    var rows =[];

    var i=0;
    for(let x of this.userData){
      var insiderow =[];
      insiderow.push(this.userData[i].firstname);
      insiderow.push(this.userData[i].lastname);
      insiderow.push(this.userData[i].username);
      insiderow.push(this.userData[i].regno);
      insiderow.push(this.userData[i].contact);  

      i=i+1;
      rows.push(insiderow);
    }
    
    const doc = new jsPDF(
      {orientation: 'landscape'}
    );
    //var cols = ["paying id", "borrow id", "username", "fine"];
    let cols = ["firstname", "lastname",	"Username",	"Reg no",	"Contact"];

    doc.autoTable(cols,rows);    
    doc.text(10, 10, "Report on User Details: " + date1);
    
    doc.save('UserDetails'+date+'.pdf');
  }
  

}
