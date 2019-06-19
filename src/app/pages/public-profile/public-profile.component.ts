import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { User } from '../../models/user';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.scss']
})
export class PublicProfileComponent implements OnInit {
  uid: String;
  private userDoc: AngularFirestoreDocument<User>;
  selectedUser: Observable<User>;

  constructor(private route: ActivatedRoute, private afs: AngularFirestore) {
    // subscribe to the parameters observable
    this.route.paramMap.subscribe(params => {
      console.log(params.get('uid'));
      this.uid = params.get('uid');
    });

    this.userDoc = afs.doc('users/this.uid');
    this.selectedUser = this.userDoc.valueChanges();
  }

  ngOnInit() {}
}
