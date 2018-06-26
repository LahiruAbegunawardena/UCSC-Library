import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-adminsidebar',
  templateUrl: './adminsidebar.component.html',
  styleUrls: ['./adminsidebar.component.css']
})
export class AdminsidebarComponent implements OnInit {

  constructor(
   
    private routes:Router,
    private authservice:AuthService
  ) { }

  ngOnInit() {
    this.authservice.getAdmnProfileDet().subscribe(res=>{
      console.log(res.data);

      

      if (res.data==null) {
        this.routes.navigate(['/admnLog']);
      } 

    });
  }

}
