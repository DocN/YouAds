import { Component, OnInit } from '@angular/core';
import { SessionsService } from '../sessions.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logcheck = 0;
  constructor(private session:SessionsService) { 
  }

  username = '';

  ngOnInit() {
    this.checkLogged();
    this.session.sessUpdate.subscribe(value => {
      this.checkLogged();
      this.username = this.session.returnUsername();
    });
    this.session.reloadSession();
  }
  checkLogged() {
    if(this.session.getLoggedOn() == 1) {
      this.logcheck = 1;
    }
    else {
      this.logcheck = 0;
    }
  }
}
