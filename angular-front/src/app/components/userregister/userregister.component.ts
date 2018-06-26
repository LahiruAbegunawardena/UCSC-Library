import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {FlashMessage} from 'angular-flash-message';
import { RouterModule, Routes } from '@angular/router'; 
//import { BaseModalConfig,BasicModalService, BaseModal } from 'angular-basic-modal';


@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {

  user_det = {
    firstname:'',
    lastname: '',
    username:'',
    password:'',
    passworda:'',
    regno:'',
    contact:'',
    address:''
  };

  //bmc = new BaseModalConfig();
  
  constructor(
    private authservice:AuthService,
    private flashMessage:FlashMessage,
    //private modal:BasicModalService
  ) { }

  ngOnInit() {
    
  }

  sendregUser(){
    console.log('component');
    console.log(this.user_det);

    const users_det = {
      firstname:this.user_det.firstname,
      lastname:this.user_det.lastname,
      username:this.user_det.username,
      password:this.user_det.password,
      //passworda:this.user_det.passworda,
      regno:this.user_det.regno,
      contact:this.user_det.contact,
      address:this.user_det.address
    };
    console.log(users_det);
    
   
    //this.authservice.registerUser(users_det).subscribe();

    this.authservice.registerUser(users_det).subscribe(res=>{
      console.log(res);

      
      
      this.flashMessage.success('User Registered Successfully..', {
        delay: 1500,
        successClass: 'success',
        close: true,
        //closeBtnClass: 'class1 class2',
        navigate: '/logPage'
      });
    }); 
      
      
    
  }

}
