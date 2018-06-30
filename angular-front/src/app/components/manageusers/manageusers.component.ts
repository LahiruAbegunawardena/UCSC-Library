import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessage } from 'angular-flash-message';

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

}
