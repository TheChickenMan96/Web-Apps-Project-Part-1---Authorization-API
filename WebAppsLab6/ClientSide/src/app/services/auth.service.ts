import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { AuthUser } from '../models/authuser';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../models/user';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  //The map method was not properly assigning 
  login(user) {
    return this.http.post(this.baseUrl + '/auth/login', user)
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
    return this.http.post(this.baseUrl + '/auth/register', model, { headers: contentHeader });
  }
}
