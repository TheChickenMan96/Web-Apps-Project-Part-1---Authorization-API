import { Component, OnInit, Input } from '@angular/core';
import { UserDto } from '../../models/user-dto';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private auth: AuthService, private router: Router) { }

  member = {};
  id = -1;
  loggedIn = false;

  ngOnInit() {
    if (!this.auth.isExpired()) {
      this.loggedIn = true;
      this.id = this.activatedRoute.snapshot.params.id;
      this.getUser(this.id);
    } else {
      this.loggedIn = false;
      setTimeout(() => {
        this.router.navigate(['/home']);

      }, 5000);
    }
  }

  getUser(id) {
    this.userService.getUser(id).subscribe(data => this.member = data);
  }
}
