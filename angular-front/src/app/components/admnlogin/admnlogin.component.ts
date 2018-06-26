import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FlashMessage} from 'angular-flash-message';

@Component({
  selector: 'app-admnlogin',
  templateUrl: './admnlogin.component.html',
  styleUrls: ['./admnlogin.component.css']
})
export class AdmnloginComponent implements OnInit {

  constructor(
    private authservice:AuthService,
    private flashMessage:FlashMessage
  ) { }

  admnlogdet = {

    username:'',
    password:'',
    serial:''
  };

  logData(){
    //console.log(this.admnlogdet);
    //this.authservice.logingAdminUser(this.admnlogdet);

    const admnlgdt = {
      username: this.admnlogdet.username,
      password: this.admnlogdet.password,
      serialkey:this.admnlogdet.serial
    };

    this.authservice.logingAdminUser(admnlgdt).subscribe(res=>{
      console.log(res.state);
      console.log(res.token);
      console.log(res.admin);
      console.log(res);

      if (res.state) {
        this.authservice.storeadmnData(res.token, res.Admin);
        this.flashMessage.success('Admin logged in Successfully..', {
          delay: 1500,
          successClass: 'success',
          close: true,
          //closeBtnClass: 'class1 class2',
          navigate: '/admnProfile'
        });

      }else{
        this.flashMessage.danger('Admin login unsuccessful..', {
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
