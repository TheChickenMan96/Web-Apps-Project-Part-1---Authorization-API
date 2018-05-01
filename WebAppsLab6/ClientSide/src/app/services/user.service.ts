import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserDto } from '../models/user-dto';

@Injectable()
export class UserService {

  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<Array<UserDto>>(this.baseUrl + '/users/users');
  }

  getUser(id) {
    return this.http.get<UserDto>(this.baseUrl + '/users/' + id);
  }

  updateUser(id, updatedUser) {
    
    return this.http.put(this.baseUrl + '/users/updateuser/' + id, updatedUser);
  }
}
