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

  constructor(private projectService: ProjectService ) {

  }

  ngOnInit() {
    this.projectService.getProjects().subscribe(projects => {
      this.projects = projects;
    });
  }

  onSubmit(project) {
    this.projectService.deleteProject(project);
  }

}
