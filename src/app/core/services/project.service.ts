import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Project, Task, MemberProgress } from '../../models/project';
import { AuthService } from '../authentication/auth.service';
import { Observable } from 'rxjs';
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
    project.deadlines = [];
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
  }

  getProjects(uid: string) {
    this.projectsCollection = this.afs.collection('projects', ref =>
      ref.where('members', 'array-contains', uid).orderBy('name', 'asc')
    );
  }

  getMembers() {
    for (let i = 0; i < this.currentProject.members.length; i++) {
      this.projectMembers[i] = this.afs.doc<User>(`users/${this.currentProject.members[i]}`).valueChanges();
    }

    for (let i = 0; i < this.projectMembers.length; i++) {
      this.projectMembers[i].subscribe(member => {
        this.membersUserArray[i] = member;
      });
    }
  }

  getTasks() {
    this.tasks = [];
    if (this.currentProject.deadlines.length) {
      for (let i = 0; i < this.currentProject.deadlines.length; i++) {
        this.tasks.push(...this.currentProject.deadlines[i].tasks);
      }
    }
  }

  getMemberProgress() {
    this.getMembers();
    this.getTasks();

    for(let i = 0; i < this.membersUserArray.length; i++) {
      
      let memberProgress = {
        member: null,
        completedTasks: [],
        pendingTasks: [],
        contribution: 0
      };

      memberProgress.member = this.membersUserArray[i];

      for(let j = 0; j < this.tasks.length; j++) {
        if(this.tasks[j].userAssigned === memberProgress.member.displayName) {
          if(this.tasks[j].completed === true) {
            memberProgress.completedTasks.push(this.tasks[j]);
          }else if(this.tasks[j].completed === false) {
            memberProgress.pendingTasks.push(this.tasks[j]);
          }
        }
      }
      memberProgress.contribution = (memberProgress.completedTasks.length / this.tasks.length) * 100;
      this.memberProgressArray.push(memberProgress);
    }
    
    console.log(this.memberProgressArray)
  }




}
