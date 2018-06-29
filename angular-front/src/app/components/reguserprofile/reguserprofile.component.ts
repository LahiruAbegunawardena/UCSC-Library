import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router'; 
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-reguserprofile',
  templateUrl: './reguserprofile.component.html',
  styleUrls: ['./reguserprofile.component.css']
})
export class ReguserprofileComponent implements OnInit {

  loggedUserData:any;

  userprofdet = {
    firstname:'',
    lastname:'',
    address:'',
    contact:''
  };

  constructor(
    private authService:AuthService,
    private routes:Router
  ) { }

  updtProf(){
    //this.userprofdet.address;
    //console.log(dtst);

    console.log(this.userprofdet);
  }

  ngOnInit() {
    this.authService.getUserProfileDet().subscribe(res=>{
      console.log(res.data);

      this.loggedUserData = res.data;
      console.log(this.loggedUserData);

      console.log(res);

      

    });        
  }

}
