import { Component, OnInit } from '@angular/core';
import { ValueService } from '../value.service';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {

  values: string[];
  selectedValue: string;

  constructor(private valueService: ValueService) { }

  ngOnInit() {
  }

  onClick() {
    this.valueService.getValues().subscribe(data => {
      this.values = data;
    });
  }

  showValue(val) {
    if (val != '') {
      this.valueService.getValue(val).subscribe(data => {
        this.selectedValue = data;
      });
    }
  }

  newValue = '';

  onSubmit() {
    this.valueService.postValue('"' + this.newValue + '"')
      .subscribe(() => this.newValue = '');
  }
}
