import { AuthService } from '../../core/authentication/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit() {}

  signIn() {
    this.auth.googleLogin();
  }
}
