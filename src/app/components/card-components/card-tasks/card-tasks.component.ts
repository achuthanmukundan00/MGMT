import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/core/services/project.service';
import { Task } from 'src/app/models/project';
import { DeadlineService } from 'src/app/core/services/deadline.service';

@Component({
  selector: 'app-card-tasks',
  templateUrl: './card-tasks.component.html',
  styleUrls: ['./card-tasks.component.scss'],
})
export class CardTasksComponent implements OnInit {
  tasks: Task[] = [];
  completedTasks: Task[] = [];
  pendingTasks: Task[] = [];

  constructor(private projectService: ProjectService, private deadlineService: DeadlineService) { }

  ngOnInit() {
    this.getRequiredTasks();
  }

  private getRequiredTasks() {
    this.projectService.getTasks();
    this.tasks = this.projectService.tasks;

    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].completed == true) {
        this.completedTasks.push(this.tasks[i]);
      }
      else {
        this.pendingTasks.push(this.tasks[i]);
      }
    }
  }

  completeTask(i) {
    this.deadlineService.completeTask(this.tasks[i]);
    this.tasks = [];
    this.pendingTasks = [];
    this.completedTasks = [];
    this.getRequiredTasks();
  }

  deleteTask(i, task: Task) {
    if (task.completed == true) {
      this.completedTasks.splice(i, 1);
    }
    else {
      this.pendingTasks.splice(i, 1);
    }

    this.tasks = [...this.pendingTasks, ...this.completedTasks];

    this.projectService.tasks = this.tasks;

    let count: number = 0

    for (let i = 0; i < this.projectService.currentProject.deadlines.length; i++) {
      let taskSize = this.projectService.currentProject.deadlines[i].tasks.length;
      this.projectService.currentProject.deadlines[i].tasks = [];
      for (let j = 0; j < taskSize - 1; j++) {
        this.projectService.currentProject.deadlines[i].tasks[j] = this.tasks[count];
        count++;
      }
    }

    this.projectService.updateProject(this.projectService.currentProject);

    this.tasks = [];
    this.pendingTasks = [];
    this.completedTasks = [];
    this.getRequiredTasks();
  }


}
