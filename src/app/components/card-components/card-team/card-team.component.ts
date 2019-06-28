import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/authentication/auth.service';
import { ProjectService } from 'src/app/core/services/project.service';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

@Component({
  selector: 'app-card-team',
  templateUrl: './card-team.component.html',
  styleUrls: ['./card-team.component.scss']
})
export class CardTeamComponent implements OnInit {
  members: User[];

  constructor(public auth: AuthService, public projectService: ProjectService, public afs: AngularFirestore) {
    this.projectService.getMembers();
    this.members = this.projectService.membersUserArray;
  }

  ngOnInit() {
    
  }
}
