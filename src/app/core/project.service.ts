import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Project } from '../models/project';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projectsCollection: AngularFirestoreCollection<Project>;
  projectDoc: AngularFirestoreDocument<Project>;
  currentProjectDoc: AngularFirestoreDocument<Project>;

  currentProject: Project;

  constructor(private afs: AngularFirestore, private auth: AuthService) {
    this.projectsCollection = this.afs.collection('projects', ref => ref.where('userID', '==', auth.uid).orderBy('name', 'asc'));

  }

  addProject(project: Project) {
    project.userID = this.auth.uid;
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
    this.currentProject  = project;
  }

}


