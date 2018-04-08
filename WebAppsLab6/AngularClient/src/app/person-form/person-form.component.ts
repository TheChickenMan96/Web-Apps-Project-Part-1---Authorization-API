import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  model = new User();

  constructor() { }

  ngOnInit() {
    this.model.question = 'pet';
  }

  submit() {
    console.log(this.model);
  }

}

class User {
  name: string;
  birthDate: number;
  question: string
}
