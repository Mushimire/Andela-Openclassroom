import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'ng6-rpwebsite-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng6-rpwebsite';
  todaydate: any;
  componentproperty;
  constructor(private myservice: MyserviceService){ }
  ngOnit() {
    this.todaydate = this.myservice.showTodayDate();
  
  }
  onClickSubmit(data) {
    alert("Entered Email id :" + data.emailid);
  }
}
