import { Component, OnInit } from '@angular/core';
//import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {FlashMessage} from 'angular-flash-message';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    //private router:Router,
    private authservice:AuthService,
    private flashMessage:FlashMessage,
    private routes:Router
  //  private jwthlper:JwtHelperService
  ) { }

  public userdata:any;
  loggedUserData:any;
  loggedAdmnData:any;

  ngOnInit() {
    this.authservice.getUserProfileDet().subscribe(res=>{
      console.log(res.data);

      this.loggedUserData = res.data;
      console.log(this.loggedUserData);

      if (this.loggedUserData) {
        this.routes.navigate(['/userProfile']);
      } 

    });

    this.authservice.getAdmnProfileDet().subscribe(res=>{
      console.log(res.data);

      this.loggedAdmnData = res.data;
      console.log(this.loggedAdmnData);

      if (this.loggedAdmnData) {
        this.routes.navigate(['/admnProfile']);
      } 

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
