import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/core/services/project.service';
import { Project } from '../../models/project';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentProject: Project;

  constructor(private projectService: ProjectService) {

  }


  ngOnInit() {
    this.currentProject = this.projectService.currentProject;
  }








}
