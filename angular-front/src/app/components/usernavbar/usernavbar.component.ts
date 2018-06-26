import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

import {FlashMessage} from 'angular-flash-message';

@Component({
  selector: 'app-usernavbar',
  templateUrl: './usernavbar.component.html',
  styleUrls: ['./usernavbar.component.css']
})
export class UsernavbarComponent implements OnInit {

  loggedUserData:any;

  constructor(
    private authservice:AuthService,
    private flashMessage:FlashMessage,
    private routes:Router

  ) { }

  ngOnInit() {
    this.authservice.getUserProfileDet().subscribe(res=>{
      console.log("user data : ");

      this.loggedUserData = res.data;
      console.log(this.loggedUserData);

      

    });
  }

  logoutUser(){
    this.authservice.logoutUser();

    this.flashMessage.success('User logged out Successfully..', {
      delay: 1500,
      successClass: 'success',
      close: true,
      //closeBtnClass: 'class1 class2',
      navigate: '/'
    });
    
    //this.router.navigate(['/logPage']);
  }

}
