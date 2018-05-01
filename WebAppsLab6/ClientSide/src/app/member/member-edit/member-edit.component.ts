import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {

  constructor(private userService: UserService, private auth: AuthService, private router: Router) { }

  member: any = {};
  updated = {};
  id = JSON.parse(localStorage.getItem('user')).id;
  loggedIn = false;

  ngOnInit() {
    if (!this.auth.isExpired()) {
      this.loggedIn = true;
      this.getUser(this.id);
    } else {
      this.loggedIn = false;
      setTimeout(() => {
        this.router.navigate(['/home']);

      }, 5000);
    }
  }

  updateUser() {
    this.updated = { introduction: this.member.introduction, lookingFor: this.member.lookingFor, interests: this.member.interests, city: this.member.city };
    this.userService.updateUser(this.id, this.updated).subscribe();
  }

  getUser(id) {
    this.userService.getUser(id).subscribe(data => this.member = data);
  }
}
