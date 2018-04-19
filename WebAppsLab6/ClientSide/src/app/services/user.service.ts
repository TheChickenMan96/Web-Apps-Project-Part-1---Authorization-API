import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserDto } from '../models/user-dto';

@Injectable()
export class UserService {

  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<Array<UserDto>>(this.baseUrl + '/users/users');
  }
}
