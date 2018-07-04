import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

import {FlashMessage} from 'angular-flash-message';

@Component({
  selector: 'app-admnnavbar',
  templateUrl: './admnnavbar.component.html',
  styleUrls: ['./admnnavbar.component.css']
})
export class AdmnnavbarComponent implements OnInit {

  constructor(
    private authservice:AuthService,
    private flashMessage:FlashMessage,
    private routes:Router
  ) { }

  loggedUserData:any;

  logoutAdmn(){
    this.authservice.logoutAdmin();

    this.flashMessage.success('Admin logged out Successfully..', {
      delay: 1500,
      successClass: 'success',
      close: true,
      //closeBtnClass: 'class1 class2',
      navigate: '/'
    });
    
    //this.router.navigate(['/logPage']);
  }

  ngOnInit() {
    this.authservice.getAdmnProfileDet().subscribe(res=>{
      console.log("user data : ");

      this.loggedUserData = res.data;
      console.log(this.loggedUserData);

      

    });
  }

}
