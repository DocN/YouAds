import { Component } from '@angular/core';
import { SessionsService } from './sessions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private session:SessionsService) {

  }
}
