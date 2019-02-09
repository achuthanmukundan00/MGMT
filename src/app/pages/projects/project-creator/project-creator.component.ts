import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../core/project.service';
import { Project } from '../../../models/project';

@Component({
  selector: 'app-project-creator',
  templateUrl: './project-creator.component.html',
  styleUrls: ['./project-creator.component.scss']
})
export class ProjectCreatorComponent implements OnInit {

  project: Project = {
   name: '',
   description: ''
  };

  constructor(private projectService: ProjectService) { }

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
