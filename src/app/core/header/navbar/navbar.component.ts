import { AuthService } from '../../authentication/auth.service';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Hit } from 'angular-instantsearch/instantsearch/instantsearch';
import { User } from 'src/app/models/user';

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
    if (query.length !== 0) {
      this.showResults = true;
    } else {
      this.showResults = false;
    }
  }

  // onSelect(hit) {
  //   const str = 'method called';
  //   console.log(str);
  //   this.router.navigate(['/users', hit.uid]);
  // }




}
