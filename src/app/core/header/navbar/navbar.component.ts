import { AuthService } from '../../authentication/auth.service';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  searchConfig = {
    ...environment.algolia,
  };

  showResults = false;

  constructor(public auth: AuthService, private afs: AngularFirestore) {}

  ngOnInit() {}

  searchChanged(query) {
    if (query.length) {
      this.showResults = true;
    } else {
      this.showResults = false;
    }
  }




}
