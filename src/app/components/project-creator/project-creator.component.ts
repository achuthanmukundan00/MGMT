import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../core/services/project.service';
import { Project } from '../../models/project';
import { AuthService } from 'src/app/core/authentication/auth.service';

@Component({
  selector: 'app-project-creator',
  templateUrl: './project-creator.component.html',
  styleUrls: ['./project-creator.component.scss']
})
export class ProjectCreatorComponent implements OnInit {

  project: Project = {
   name: '',
   description: '',
  };

  constructor(private projectService: ProjectService, public auth: AuthService) { }

  ngOnInit() {

  }

  onSubmit() {
    if (this.project.name !== '' && this.project.description !== '') {
      this.projectService.addProject(this.project);
      this.project.name = '';
      this.project.description = '';
    }
  }






}
