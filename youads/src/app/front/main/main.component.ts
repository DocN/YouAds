import { Component, OnInit } from '@angular/core';
import { SessionsService } from '../../sessions.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  tester = 'tester';
  model: any= {};
  constructor(private session:SessionsService) { }

  ngOnInit() {
  }

}
