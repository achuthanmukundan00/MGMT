import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { ProjectService } from '../../core/services/project.service';
import { map } from 'rxjs/operators';
import { Project } from '../../models/project';
import { AuthService } from '../../core/authentication/auth.service';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.scss']
})
export class PublicProfileComponent implements OnInit {
  uid: string;
  selectedUser$: Observable<User>;
  projects: Project[];
  myProjects: Project[];

  constructor(private route: ActivatedRoute, private afs: AngularFirestore, private projectService: ProjectService, private auth: AuthService) {
    // subscribe to the parameters observable
    this.route.paramMap.subscribe(params => {
      this.uid = params.get('uid');
      console.log(this.uid);
      this.selectedUser$ = this.afs.doc<User>(`users/${this.uid}`).valueChanges();
      this.getRequiredProjects(); 
    }); 
  }

  ngOnInit() {   
  
  }

  private getRequiredProjects() {
    this.projectService.getProjects(this.uid);
    this.projectService.projectsCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Project;
          data.id = a.payload.doc.id;
          return data;
        });
      })).subscribe(projects => {
        console.log('initialized projects');
        this.projects = projects;
      });
  }

  private getMyProjects() {
    this.projectService.getProjects(this.auth.uid);
    this.projectService.projectsCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Project;
          data.id = a.payload.doc.id;
          return data;
        });
      })).subscribe(projects => {
        console.log('initialized projects');
        this.myProjects = projects;
      });
  }

  addUserToProject(user: User, project: Project) {
    if(project.members.indexOf(user.uid) == -1) {
      project.members.push(user.uid);
      console.log("user added");
      this.projectService.updateProject(project);
    }
    else {
      console.log("User already in project.");
    }
  }
}
