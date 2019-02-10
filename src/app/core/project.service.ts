import { Injectable } from '@angular/core';
import { AngularFirestore,
         AngularFirestoreCollection,
         AngularFirestoreDocument
       } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projectsCollection: AngularFirestoreCollection<Project>;
  projects: Project[];
  projectDoc: AngularFirestoreDocument<Project>;

  constructor(private afs: AngularFirestore) {

    this.projectsCollection = this.afs.collection('projects', ref => ref.orderBy('name', 'asc'));

  }

  getProjects(): Promise<Project[]> {
    return new Promise((resolve, reject) => {
      if (this.projects) {
        resolve(this.projects);
      } else {
        this.projectsCollection.snapshotChanges()
        .pipe(map(changes => {
          return changes.map(a => {
            const data = a.payload.doc.data() as Project;
            data.id = a.payload.doc.id;
            return data;
          });
        })).subscribe(projects => {
          console.log('initialized projects');
          this.projects = projects;
          resolve(projects);
        });
      }
    });

  }

  addProject(project: Project) {
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


}


