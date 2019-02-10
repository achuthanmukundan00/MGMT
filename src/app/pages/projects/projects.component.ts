import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../core/project.service';
import { Project } from '../../models/project';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],

})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  editState = false;
  projectToEdit: Project;

  constructor(private projectService: ProjectService ) {
  }

  async ngOnInit() {
    this.projects = await this.projectService.getProjects();
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



}
