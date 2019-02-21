import { AuthService } from '../../core/authentication/auth.service';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../core/services/project.service';
import { Project } from '../../models/project';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  projects: Project[];


  constructor (public auth: AuthService, private projectService: ProjectService) {
  }

  ngOnInit() {
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

  signOut() {
    this.auth.signOut();
  }
}
