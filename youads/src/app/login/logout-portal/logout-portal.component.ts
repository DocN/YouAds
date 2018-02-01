import { Component, OnInit } from '@angular/core';
import { SessionsService } from '../../sessions.service';

@Component({
  selector: 'app-logout-portal',
  templateUrl: './logout-portal.component.html',
  styleUrls: ['./logout-portal.component.css']
})
export class LogoutPortalComponent implements OnInit {

  constructor(private session:SessionsService) { }

  ngOnInit() {
    this.session.logoutSession();
  }
}
