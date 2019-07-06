import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../core/services/project.service';
import { Project } from 'src/app/models/project';
import { AuthService } from '../../core/authentication/auth.service';
import { User } from 'src/app/models/user';
import {
  AngularFirestore,
} from '@angular/fire/firestore';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  members: User[];
  currentProject: Project = this.projectService.currentProject;
  currentProjectSelected: Boolean;

  constructor(public auth: AuthService, public projectService: ProjectService, public afs: AngularFirestore) {
  }

  ngOnInit() {
    if(this.currentProject) {
      this.currentProjectSelected = true;
      this.projectService.getMembers();
      this.members = this.projectService.membersUserArray;
    }
    else {
      this.currentProjectSelected = false;
    }  
  }

  removeMember(i) {
    this.members.splice(i, 1);
    this.projectService.currentProject.members.splice(i, 1);
    this.projectService.updateProject(this.projectService.currentProject);
  }

}
