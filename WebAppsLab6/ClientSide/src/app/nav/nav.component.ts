import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  timer: any;
  model = {};
  isCollapsed = false;
  loggedIn = false;
  alertPlaying = false;
  alert = {};
  user = localStorage.getItem('user') != null ? JSON.parse(localStorage.getItem('user')).userName : '';
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  

  login() {
    this.authService.login(this.model).subscribe(data => this.playAlert(-10), error => this.playAlert(error.status), () => this.user = JSON.parse(localStorage.getItem('user')).userName);
  }

  playAlert(errorStatus) {
    this.alertPlaying = true;
    if (errorStatus == 401) {
      this.alert = {
        type: 'danger',
        msg: 'Invalid userName and/or password',
        timeout: 2000
      };
    } else if (errorStatus == -10) {
      this.alert = {
        type: 'success',
        msg: 'Successfully Logged In',
        timeout: 2000
      };
      this.router.navigate(['/members']);
    } else if (errorStatus == -1) {
      this.alert = {
        type: 'info',
        msg: 'Logged out',
        timeout: 2000
      };
    } else if (errorStatus == 500) {
      this.alert = {
        type: 'danger',
        msg: 'Server Error Occurred',
        timeout: 2000
      };
    } else if (errorStatus == 0) {
      this.alert = {
        type: 'danger',
        msg: 'Unknown Error Occurred',
        timeout: 2000
      };
    }
  }
  closeAlert() {
    this.alertPlaying = false;
  }

  logOut() {
    this.authService.logOut();
    this.playAlert(-1);
    this.user = '';
  }

  checkLogin() {
    this.user = localStorage.getItem('user') != null ? JSON.parse(localStorage.getItem('user')).userName : '';
    return this.authService.isExpired();
  }
  
}
