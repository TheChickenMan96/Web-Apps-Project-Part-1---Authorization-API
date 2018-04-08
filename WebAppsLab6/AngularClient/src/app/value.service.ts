import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ValueService {
  baseUrl = 'http://localhost:58763/api/values/';

  constructor(private http: HttpClient) { }

  getValues() {
    return this.http.get<string[]>(this.baseUrl );
  }

  getValue(id: number) {
    return this.http.get<string>(this.baseUrl  + id);
  }

  postValue(value: string) {
    const contentHeader = new HttpHeaders({ 'Content-type': 'application/json' });  

    return this.http.post(this.baseUrl, value, { headers: contentHeader });
  }
}
