import { Component, OnInit, } from '@angular/core';
import { AuthService } from '../../../core/authentication/auth.service';
import { ProjectService } from 'src/app/core/services/project.service';
import { User } from 'src/app/models/user';
import {
  AngularFirestore,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-team',
  templateUrl: './card-team.component.html',
  styleUrls: ['./card-team.component.scss']
})
export class CardTeamComponent implements OnInit {
  public members: User[] = [];

  constructor(public auth: AuthService,
              public projectService: ProjectService,
              public afs: AngularFirestore,
              private router: Router, ) {
    this.projectService.getMembers();
    this.members = this.projectService.membersUserArray;
    console.log(this.projectService.membersUserArray);
  }

  ngOnInit() {
    console.log('method called!');
    this.getMembers();
  }
  onSelect(member) {
    this.router.navigate(['/users', member.uid]);
  }


  getMembers() {
    this.members = [];
    this.projectService.getMembers();
    this.members = this.projectService.membersUserArray;
  }
}
