import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserDto } from '../../models/user-dto';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  constructor(private userService: UserService, private auth: AuthService, private router: Router) { }

  users = [];
  curUser: any = {};
  loggedIn = false;

  ngOnInit() {
    if (!this.auth.isExpired()) {
      this.loggedIn = true;
      this.curUser = JSON.parse(localStorage.getItem('user'));
      this.getUsers();
    } else {
      this.loggedIn = false;
      setTimeout(() => {
        this.router.navigate(['/home']);

      }, 5000);
    }
  }

  getUsers() {
    this.userService.getUsers().subscribe(p => this.users = p.filter(u => u.id != this.curUser.id));
  }

}
