import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Project, Deadline, Task } from '../../models/project';
import { AuthService } from '../authentication/auth.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { ProjectService } from './project.service';

@Injectable({
  providedIn: 'root'
})
export class DeadlineService {
  currentProject: Project;
  deadlines: Deadline[] = [];

  constructor(private projectService: ProjectService) {
  }

  getDeadlines() {
    this.currentProject = this.projectService.currentProject;
    this.deadlines = this.currentProject.deadlines;
  }

  addDeadline(deadline: Deadline) {
    if (this.deadlines == []) {
      this.deadlines = [deadline];
    }
    else {
      this.deadlines.push(deadline);
    }
    this.currentProject.deadlines = this.deadlines;
    this.projectService.updateProject(this.currentProject);

  }

  updateDeadlines(deadlines: Deadline[]) {
    this.projectService.currentProject.deadlines = deadlines;
    this.projectService.updateProject(this.currentProject);
  }

  completeTask(task: Task) {
    for (let i = 0; i < this.deadlines.length; i++) {
      if (this.deadlines[i].tasks.indexOf(task) !== -1) {
        this.deadlines[i].tasks[this.deadlines[i].tasks.indexOf(task)].completed = true;
        console.log(`task completed`);
      }
    }
    this.currentProject.deadlines = this.deadlines;
    this.projectService.updateProject(this.currentProject);
  }

}
