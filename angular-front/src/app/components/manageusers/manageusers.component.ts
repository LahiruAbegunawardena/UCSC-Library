import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.css']
})
export class ManageusersComponent implements OnInit {

  userData:any; 

  constructor(
    private auth:AuthService
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

}
