import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './../core/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit() {}

  signIn() {
    this.auth.googleLogin();
  }
  signOut() {
    this.auth.signOut();
  }
}
