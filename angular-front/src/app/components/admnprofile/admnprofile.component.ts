import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-admnprofile',
  templateUrl: './admnprofile.component.html',
  styleUrls: ['./admnprofile.component.css']
})
export class AdmnprofileComponent implements OnInit {

  loggedAdmnData:any;

  constructor(
    private authService:AuthService
  ) { }

  ngOnInit() {
    this.authService.getAdmnProfileDet().subscribe(res=>{
      console.log(res.data);

      this.loggedAdmnData = res.data;
      console.log(this.loggedAdmnData);

    });
  }


}
