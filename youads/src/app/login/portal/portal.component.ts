import { Component, OnInit } from '@angular/core';
import * as crypto from 'crypto-js';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { SessionsService } from '../../sessions.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css'],
})
@Injectable()

export class PortalComponent implements OnInit {
  
  title = 'YouAds';
  testUser = '';
  testPassword = '';
  encryptionKey = '';
  loggedOn = 0;
  //credentials array
  model: any = {};
  loading = false;
  error = '';
  warningMessage = '';

  constructor(private router:Router, private http: HttpClient, private spinnerService: Ng4LoadingSpinnerService, private session:SessionsService) { 
  }

  ngOnInit() {
  }

  login() {
    //clear warning
    this.warningMessage = '';
    //initiate loading
    this.spinnerService.show();

    //collect passwords from model
    this.testUser = this.model.username;
    this.testPassword = this.model.password;
    
    console.log(this.testUser);
    //check if input is valid
    if(this.testUser == null || this.testUser == '' ||  this.testPassword == null || this.testPassword == '') {
      this.warningMessage = 'Invalid username or password';
      this.spinnerService.hide();
      return;
    }

    //encrypt password with SHA1
    var encryptionKey = crypto.SHA1(this.testPassword);
    console.log(encryptionKey.toString());
    //send data to login.php to compare against db
    let data = {'encryptionKey': encryptionKey.toString(), 'userName': this.testUser, 'userId': 1};
    this.http.post('http://youads.co/php/login.php', data)
      .subscribe(
        (res) => {
          if(res.toString() != "") {
            //check the userID first and see if the credentials are valid.
            var userID = res['userID'];
            console.log(userID);
            //when the userID is null it means the credentials are invalid.
            if(userID == null) {
              this.warningMessage = 'Invalid username or password';
              this.spinnerService.hide();
              return;
            }
            //store session data
            this.session.loginSession(res);

            //finish loading release load spinner
            this.spinnerService.hide();
            this.router.navigate(['/dashboard']);
          }
        },
        err => {
          console.log(err);
          //finish loading
          this.spinnerService.hide();
        }
      );
  }
}
