import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Project {
  name: string;
  description: string;
  deadlines: Deadline[];
}
interface ProjectId extends Project {
  id: string;
}

interface Deadline {
  name: string;
  date: string;
  tasks: string[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projectsCollection: AngularFirestoreCollection<Project>;
  projects: any;

  projectName: string;
  projectDescription: string;

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.projectsCollection = this.afs.collection('projects');

    this.projects = this.projectsCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as Project;
          const id = a.payload.doc.id;
          return { id, data };
        })
      )
    );
  }

  addProject() {
    this.afs
      .collection('projects')
      .add({ name: this.projectName, description: this.projectDescription });
  }

  deleteProject(projectId) {
    this.afs.doc('projects/' + projectId).delete();
  }
}
