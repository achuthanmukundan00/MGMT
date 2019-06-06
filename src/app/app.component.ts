import { AuthService } from './core/authentication/auth.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'mgmtProject';
  constructor(public auth: AuthService, ) {
  }
}
