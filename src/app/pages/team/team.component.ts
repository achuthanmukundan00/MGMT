import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../core/services/project.service';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  currentProject: Project = this.projectService.currentProject;

  constructor(public projectService: ProjectService) {
    
  }

  ngOnInit() {
  }
}
