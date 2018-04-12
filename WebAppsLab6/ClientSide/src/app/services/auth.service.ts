import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { AuthUser } from '../models/authuser';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../models/user';

@Injectable()
export class AuthService {
  baseUrl = 'https://webappslab6kevinmitchell.azurewebsites.net/api/auth/';

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  //The map method was not properly assigning 
  login(user) {
    return this.http.post(this.baseUrl + 'login', user)
      .map((result: any) => {
        if (result) {
          var buildUser: User = { id: result.id, userName: result.userName };
          var auth: AuthUser = { tokenString: result.tokenString, user: buildUser };
          localStorage.setItem('token', auth.tokenString);
          localStorage.setItem('user', JSON.stringify(auth.user));
        }
        return result;
      });
  }

  isExpired() {
    return this.jwtHelper.isTokenExpired();
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  register(model) {
    const contentHeader = new HttpHeaders({ 'Content-type': 'application/json' });
    return this.http.post(this.baseUrl + 'register', model, { headers: contentHeader });
  }
}
