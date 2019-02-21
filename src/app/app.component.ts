import { AuthService } from './core/authentication/auth.service';
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mgmtProject';
  items: Observable<any[]>;
  constructor(db: AngularFirestore, public auth: AuthService) {
    this.items = db.collection('items').valueChanges();
  }
}
