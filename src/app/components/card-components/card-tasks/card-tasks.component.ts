import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/core/services/project.service';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-card-tasks',
  templateUrl: './card-tasks.component.html',
  styleUrls: ['./card-tasks.component.scss']
})
export class CardTasksComponent implements OnInit {
  taskCount: number;
  taskText: string = '';
  tasks: string[] = this.projectService.currentProject.tasks;
  currentProject: Project;
  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.currentProject = this.projectService.currentProject;
    if (this.tasks !== null) {
      this.taskCount = this.tasks.length;
    } else {
      this.taskCount = 0;
    }

  }

  addTask() {
    this.tasks.push(this.taskText);
    this.taskText = '';
    this.projectService.updateTasks(this.currentProject, this.tasks);
    this.taskCount = this.currentProject.tasks.length;
  }

  deleteTask(i) {
    this.tasks.splice(i, 1);
    this.projectService.updateTasks(this.currentProject, this.tasks);
    this.taskCount = this.currentProject.tasks.length;
  }
}
