import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessage } from 'angular-flash-message';

@Component({
  selector: 'app-adminfines',
  templateUrl: './adminfines.component.html',
  styleUrls: ['./adminfines.component.css']
})
export class AdminfinesComponent implements OnInit {

  display:any;

  constructor(
    private auth:AuthService,
    private flashMessage:FlashMessage
  ) { }

  rslvdData:any;
  unpaiddData:any;

  ngOnInit() {
    this.showAllRslved();
  }

  showAllRslved(){
    this.auth.ShowAllRslvedBrw().subscribe(res=>{
     // console.log(res.book_details);
      this.rslvdData = res.rslvd_details;
      console.log(this.rslvdData);
    });
  }

  showAllUnpaid(){
    this.auth.ShowAllUnPaid().subscribe(res=>{
     // console.log(res.book_details);
      this.unpaiddData = res.unpaid;
      console.log(this.unpaiddData);
    });
  }

  unpaid(){
    this.showAllUnpaid();
    this.display = "block";
  }

  oncloseEdit(){
    this.display = "none";
  }

  pay(item:any){
    this.auth.updateUnpaid(item).subscribe(res=>{
       console.log(res);
       this.flashMessage.success('Paid details updated..', {
        delay: 1500,
        successClass: 'success',
        close: true,
        //closeBtnClass: 'class1 class2',
        navigate: '/'
      });
     });
  }

}
