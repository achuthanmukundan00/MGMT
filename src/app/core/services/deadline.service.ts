import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Project, Deadline } from '../../models/project';
import { AuthService } from '../authentication/auth.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { ProjectService } from './project.service';

@Injectable({
  providedIn: 'root'
})
export class DeadlineService {
  currentProject: Project;
  deadlines: Deadline[];

  constructor(private projectService: ProjectService) {
  }

  getDeadlines() {
    this.currentProject = this.projectService.currentProject;
    this.deadlines = this.currentProject.deadlines;
  }

  addDeadline(deadline: Deadline) {
    if(this.deadlines == null) {
      this.deadlines = [deadline];
    }
    else {
      this.deadlines.push(deadline);
    }
    this.currentProject.deadlines = this.deadlines;
    this.projectService.updateProject(this.currentProject);
  }


}
