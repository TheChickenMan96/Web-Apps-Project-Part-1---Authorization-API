import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-server-data',
  templateUrl: './server-data.component.html',
  styleUrls: ['./server-data.component.css']
})
export class ServerDataComponent implements OnInit {
  data: string[];
  baseUrl = 'http://localhost:58763/api';   

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get <string[]>(this.baseUrl + '/values').subscribe(response => {
      this.data = response;
    }, error => {
      console.log('Need CORS to access: ' + this.baseUrl);
    });
  }

}
