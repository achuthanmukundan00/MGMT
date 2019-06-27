import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../core/services/project.service';
import { Project } from '../../models/project';
import { map } from 'rxjs/operators';
import { AuthService } from '../../core/authentication/auth.service';
import { User } from 'firebase';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],

})
export class ProjectsComponent implements OnInit {
  public projects: Project[];
  editState = false;
  projectToEdit: Project;

  constructor(private projectService: ProjectService, private auth: AuthService) {
  }

  ngOnInit() {
    this.getRequiredProjects();   
  }

 

  private getRequiredProjects() {
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
        this.projects = projects;
      });
  }

  onSubmit(event, project: Project) {
    this.clearState();
    this.projectService.deleteProject(project);
  }

  editProject(event, project: Project) {
    this.editState = true;
    this.projectToEdit = project;
  }

  clearState() {
    this.editState = false;
    this.projectToEdit = null;
  }

  updateProject(project: Project) {
    this.projectService.updateProject(project);
    this.clearState();
  }

  setCurrentProject(project: Project) {
    this.projectService.setCurrentProject(project);
  }
}
