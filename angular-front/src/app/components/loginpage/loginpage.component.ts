import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {FlashMessage} from 'angular-flash-message';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  
  userlogdet = {
    username: '',
    password: ''
  };

  constructor(
    private authservice:AuthService,
    private flashMessage:FlashMessage

  ) { }

  

  logingData(){
    //console.log(this.userlogdet);
    //console.log(frmData);

    const userlgdt = {
      username: this.userlogdet.username,
      password: this.userlogdet.password
    };

    console.log(userlgdt);

    this.authservice.logingRegUser(userlgdt).subscribe(res=>{
      console.log(res.state);
      console.log(res.token);
      console.log();
      console.log(res);
    


      if (res.state) {
        this.authservice.storeData(res.token, res.user);
        this.flashMessage.success('User logged in Successfully..', {
          delay: 1500,
          successClass: 'success',
          close: true,
          //closeBtnClass: 'class1 class2',
          navigate: '/userProfile'
        });

      }else{
        this.flashMessage.danger('User login unsuccessful..', {
          delay: 1500,
          dangerClass: 'danger',
          close: true
          //closeBtnClass: 'class1 class2',
          //navigate: ''
        });
      }

      
    });
  }

  ngOnInit() {
  }

}
