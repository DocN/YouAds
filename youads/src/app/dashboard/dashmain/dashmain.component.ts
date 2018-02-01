import { Component, OnInit } from '@angular/core';
import { SessionsService } from '../../sessions.service';

@Component({
  selector: 'app-dashmain',
  templateUrl: './dashmain.component.html',
  styleUrls: ['./dashmain.component.css'],
})
export class DashmainComponent implements OnInit {
  tester = 'not logged on';
  constructor(private session:SessionsService) { 
  }

  ngOnInit() {
    this.tester = this.session.checkLoginStatus().toString();
    if(this.session.checkLoginStatus() == 1) {
      this.tester = 'logged in as  ' + this.session.returnUsername();
    }
    else {
      this.tester = 'invalid page';      
    }
  }



}
