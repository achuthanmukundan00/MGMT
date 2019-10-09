import { AuthService } from '../../authentication/auth.service';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';


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

  constructor(public auth: AuthService, private afs: AngularFirestore, private router: Router) {}

  ngOnInit() {}

  searchChanged(query) {
    if (query.length === 0) {
      this.showResults = false;
    } else {
      this.showResults = true;
    }
  }

  onSelect(hit) {
    this.router.navigate(['/users', hit.uid]);
  }




}
