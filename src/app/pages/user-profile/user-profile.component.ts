import { AuthService } from '../../core/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  constructor(public auth: AuthService) {
  }
  ngOnInit() {}

  signOut() {
    this.auth.signOut();
  }
}
