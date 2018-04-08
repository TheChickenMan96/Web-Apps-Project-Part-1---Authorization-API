import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-data',
  templateUrl: './sample-data.component.html',
  styleUrls: ['./sample-data.component.css']
})
export class SampleDataComponent implements OnInit {

  beverages: Beverage[];

  constructor() { }

  ngOnInit() {
    this.beverages = [
      new Beverage('Coffee', 2),
      new Beverage('Tea', 2.5),
      new Beverage('Beer', 5),
      new Beverage('Wine', 7.5)
    ];
  }
}

class Beverage {
  constructor(public name: string, public price: number) { }
}
