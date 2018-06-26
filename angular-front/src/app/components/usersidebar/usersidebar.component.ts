import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

import {FlashMessage} from 'angular-flash-message';

@Component({
  selector: 'app-usersidebar',
  templateUrl: './usersidebar.component.html',
  styleUrls: ['./usersidebar.component.css']
})
export class UsersidebarComponent implements OnInit {
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

      if(res.data == null){
        this.routes.navigate(['/logPage']);
      }

    });

  }

}
