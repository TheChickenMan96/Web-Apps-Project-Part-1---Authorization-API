import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model = { username: '', password: '', gender: 'male', name: '', birthDate: '', city: '' };
  passwordCon = { password: '' };
  errors: string[] = [];
  success = false;

  passwordConAlert = {
    type: 'danger',
    msg: 'Passwords do not match!',
    timeout: 10000
  };
  alert = {
    type: 'danger',
    timeout: 10000
  };
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  checkPassword() {
    return this.model.password == this.passwordCon.password;
  }

  getErrors(error) {
    if (error.Password != null) {
      this.errors.push(error.Password["0"]);
    }
    if (error.UserName != null) {
      this.errors.push(error.UserName["0"]);
    }
    if (error.Gender != null) {
      this.errors.push(error.Gender["0"]);
    }
    if (error.Name != null) {
      this.errors.push(error.Name["0"]);
    }
    if (error.birthDate != null) {
      this.errors.push('Birth Date is required');
    }
    if (error.City != null) {
      this.errors.push(error.City["0"]);
    }
    console.log(this.errors);
  }
  

  register() {
    if (this.checkPassword()) {
      this.authService.register(this.model).subscribe(data => this.success = true, error => this.getErrors(error.error), () => this.loginAfterRegister());
    }
  }

  loginAfterRegister() {
    if (this.success) {
      var loginModel = { username: this.model.username, password: this.model.password };
      this.authService.login(loginModel).subscribe();
      setTimeout(() => {
        this.router.navigate(['/members']);
      }, 2000);
    }
  }
}
