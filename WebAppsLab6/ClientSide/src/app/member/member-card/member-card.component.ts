import { Component, OnInit, Input } from '@angular/core';
import { UserDto } from '../../models/user-dto';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {

  @Input() member: UserDto;

  constructor() { }

  ngOnInit() {
  }

}
