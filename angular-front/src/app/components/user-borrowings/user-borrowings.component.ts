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



  ngOnInit() {

    
  }

}
