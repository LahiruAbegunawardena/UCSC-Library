import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admnsuggest',
  templateUrl: './admnsuggest.component.html',
  styleUrls: ['./admnsuggest.component.css']
})
export class AdmnsuggestComponent implements OnInit {

  sgstData:any;
  

  constructor(
    private auth:AuthService
  ) {}

  ngOnInit() {
    this.getData();
  }

  //..............get book details when page load.................

  getData(){
    this.auth.showSgst().subscribe(res=>{
     // console.log(res.book_details);
      this.sgstData = res.suggestions;
      console.log(this.sgstData);
    });
  }


}
