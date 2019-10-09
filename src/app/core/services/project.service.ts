import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Project, Task, MemberProgress } from '../../models/project';
import { AuthService } from '../authentication/auth.service';
import { Observable, forkJoin } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projectsCollection: AngularFirestoreCollection<Project>;
  projectDoc: AngularFirestoreDocument<Project>;
  currentProjectDoc: AngularFirestoreDocument<Project>;
  currentProject: Project;


  projectToAddMemberDoc: AngularFirestoreDocument<Project>;
  projectToAddMember: Project;

  projectMembers: Observable<User>[] = [];
  membersUserArray: User[] = [];

  memberProgressArray: MemberProgress[] = [];

  tasks: Task[] = [];


  constructor(private afs: AngularFirestore, private auth: AuthService) {
  }

  addProject(project: Project) {
    project.userID = this.auth.uid;
    project.members = [this.auth.uid];
    project.deadlines.length = 0;
    this.projectsCollection.add(project);
  }

  deleteProject(project: Project) {
    this.projectDoc = this.afs.doc(`projects/${project.id}`);
    this.projectDoc.delete();
  }

  updateProject(project: Project) {
    this.projectDoc = this.afs.doc(`projects/${project.id}`);
    this.projectDoc.update(project);
  }


  getCurrentProject() {
    return this.currentProject;
  }

  setCurrentProject(project: Project) {
    this.currentProject = project;
    this.getMembers();
  }

  getProjects(uid: string) {
    this.projectsCollection = this.afs.collection('projects', ref =>
      ref.where('members', 'array-contains', uid).orderBy('name', 'asc')
    );
  }

  getMembers() {
    this.projectMembers.length = 0;
    this.membersUserArray.length = 0;

    for (let i = 0; i < this.currentProject.members.length; i++) {
      this.projectMembers[i] = this.afs.doc<User>(`users/${this.currentProject.members[i]}`).valueChanges();
    }

    const memberUserPromises = [];
    for (let i = 0; i < this.projectMembers.length; i++) {
      memberUserPromises.push(new Promise((resolve, reject) => {
        this.projectMembers[i].subscribe(member => {
          this.membersUserArray[i] = member;
          resolve();
        });
      }));
    }
    return Promise.all(memberUserPromises);
  }

  getTasks() {
    this.tasks.length = 0;
    if (this.currentProject.deadlines.length) {
      for (let i = 0; i < this.currentProject.deadlines.length; i++) {
        this.tasks.push(...this.currentProject.deadlines[i].tasks);
      }
    }
  }

  async getMemberProgress() {
    // Updates member array and task array
    this.memberProgressArray = [];

    await this.getMembers();
    this.getTasks();

    // TODO: delete this
    console.log('Length of members array: ' + this.membersUserArray.length);
    console.log('members: ' + JSON.stringify(this.membersUserArray));
    console.log('members no stringify: ' + this.membersUserArray);

    for (let i = 0; i < this.membersUserArray.length; i++) {

      const memberProgress = {
        member: null,
        completedTasks: [],
        pendingTasks: [],
      };

      memberProgress.member = this.membersUserArray[i];

      for (let j = 0; j < this.tasks.length; j++) {
        if (this.tasks[j].userAssigned === memberProgress.member.displayName) {
          if (this.tasks[j].completed === true) {
            memberProgress.completedTasks.push(this.tasks[j]);
          } else if (this.tasks[j].completed === false) {
            memberProgress.pendingTasks.push(this.tasks[j]);
          }
        }
      }
      console.log(memberProgress);

      this.memberProgressArray[i] = memberProgress;
    }
  }




}
