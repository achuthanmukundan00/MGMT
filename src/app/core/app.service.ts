import { Injectable } from '@angular/core';
import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';

const config = { collection_endpoint: 'projects' };

// Task Map
interface Task<T> {
  members: string[]; // Array in a map
  taskID: string;
  taskName: string;
}
// Deadline Map
interface Deadline<T> {
  deadlineID: string;
  deadlineName: string; // Array of maps
  tasks: Task<any>[];
}
// Projects Collection
interface Projects {
  deadlines: Deadline<any>[]; // Array of maps
  projectID: string;
  projectName: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  projects: AngularFirestoreCollection<Projects>;
  projectDoc: AngularFirestoreDocument<Projects>;
  tasks: AngularFirestoreCollection<Task<any>>;
  taskDoc: AngularFirestoreDocument<Task<any>>;

  constructor(private db: AngularFirestore) {
    this.projects = db.collection<Projects>(config.collection_endpoint);
  }

  addProject(project) {
    this.projects.add(project);
  }

  updateProject(id, update) {
    this.projectDoc = this.db.doc<Projects>(
      `${config.collection_endpoint}/${id}`
    );

    this.projectDoc.update(update);
  }

  deleteProject(id) {
    this.projectDoc = this.db.doc<Projects>(
      `${config.collection_endpoint}/${id}`
    );

    this.projectDoc.delete();
  }

  addTask(task) {
    this.tasks.add(task);
  }

  updateTask(id, update) {
    this.taskDoc = this.db.doc<Task<any>>(
      `${config.collection_endpoint}/${id}`
    );

    this.taskDoc.update(update);
  }

  deleteTask(id) {
    this.taskDoc = this.db.doc<Task<any>>(
      `${config.collection_endpoint}/${id}`
    );

    this.taskDoc.delete();
  }



}
