import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { User } from '../../models/user';
import { ProjectService } from '../../core/services/project.service';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.scss']
})
export class PublicProfileComponent implements OnInit {
  uid: String;
  public selectedUser$: Observable<User>;

  constructor(private route: ActivatedRoute, private afs: AngularFirestore, private projectService: ProjectService) {
    // subscribe to the parameters observable
    this.route.paramMap.subscribe(params => {
      console.log(params.get('uid'));
      this.uid = params.get('uid');
      this.selectedUser$ = this.afs.doc<User>(`users/${this.uid}`).valueChanges();
    });

  }

  ngOnInit() {}
}
