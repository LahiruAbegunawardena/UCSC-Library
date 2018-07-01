import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-fines',
  templateUrl: './user-fines.component.html',
  styleUrls: ['./user-fines.component.css']
})
export class UserFinesComponent implements OnInit {

  loggedUserData:any;
  rslvdata:any;

  constructor(
    private auth:AuthService
  ) { }

  getuserData(){
    this.auth.getUserProfileDet().subscribe(res=>{
      console.log("user data taken: ");

      this.loggedUserData = res.data;
      console.log(this.loggedUserData);

      this.takeMyRslv();
    });

    
  }

  takeMyRslv(){
    this.auth.showMyRslved(this.loggedUserData).subscribe(res=>{
      console.log("rslved data: ");

      this.rslvdata = res.details;
      console.log(this.rslvdata);
    });

    
  }

  ngOnInit() {
    this.getuserData();

    
  }

  

}
