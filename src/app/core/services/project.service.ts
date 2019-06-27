import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Project } from '../../models/project';
import { AuthService } from '../authentication/auth.service';
import { User } from '../../models/user';
import { stringify } from '@angular/core/src/render3/util';

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

  constructor(private afs: AngularFirestore, private auth: AuthService) {
  }

  addProject(project: Project) {
    project.userID = this.auth.uid;
    project.members = [this.auth.uid];
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

  updateTasks(project: Project, tasks: string[]) {
    project.tasks = tasks;
    this.updateProject(project);
  }

  getProjects(uid: string) {
    this.projectsCollection = this.afs.collection('projects', ref =>
      ref.where('members', 'array-contains', uid).orderBy('name', 'asc')
    );
  }
}
