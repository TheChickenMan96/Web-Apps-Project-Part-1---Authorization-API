import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  show = true;
  label = "HIDE BANNER";

  toggle() {
    this.show = !this.show;
    this.label = this.show ? "HIDE BANNER" : "SHOW BANNER";
  }

}
