import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-user-borrowings',
  templateUrl: './user-borrowings.component.html',
  styleUrls: ['./user-borrowings.component.css']
})
export class UserBorrowingsComponent implements OnInit {

  constructor(
    private authService:AuthService
  ) { }

  myDet = {
    username:''
  }

  borrowdet:any;

  

  ngOnInit() {
    this.getMyBorrows();    
  }

  getMyBorrows(){

    this.authService.getUserProfileDet().subscribe(res=>{
      console.log("user data : ");

      this.myDet.username = res.data.username;
      console.log(this.myDet.username);

      this.passdata(this.myDet);

    });
  }

  passdata(data:any){ 
    
    console.log('here are my borrows...');
    //console.log(this.authService.getMyBorrwDet(data));
    //console.log(mydata);

    this.authService.getMyBorrwDet(data).subscribe(res=>{
      console.log(res.borrows);

      this.borrowdet = res.borrows;
    });
    
  }

}
