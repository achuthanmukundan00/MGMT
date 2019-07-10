import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { User } from 'src/app/models/user';
import { ProjectService } from 'src/app/core/services/project.service';
import { Task, Deadline, Project } from 'src/app/models/project';
import { CardTasksComponent } from '../card-components/card-tasks/card-tasks.component';

@Component({
  selector: 'app-task-creator',
  templateUrl: './task-creator.component.html',
  styleUrls: ['./task-creator.component.scss']
})
export class TaskCreatorComponent implements OnInit {

  @Output() outputToParent = new EventEmitter<boolean>();


  members: User[];
  deadlines: Deadline[];
  selectedDeadline: Deadline;

  task: Task = {
    name: '',
    completed: false,
    userAssigned: ''
  };


  constructor(public auth: AuthService, private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getMembers();
    this.members = this.projectService.membersUserArray;
    this.deadlines = this.projectService.currentProject.deadlines;
  }

  onSubmit() {
    if (this.projectService.currentProject.deadlines[this.deadlines.indexOf(this.selectedDeadline)].tasks == []) {
      this.projectService.currentProject.deadlines[this.deadlines.indexOf(this.selectedDeadline)].tasks = [this.task];
    }
    else {
      this.projectService.currentProject.deadlines[this.deadlines.indexOf(this.selectedDeadline)].tasks.push(this.task);
    }
    this.projectService.updateProject(this.projectService.currentProject);
    this.outputToParent.emit(true);

    this.task = {
      name: '',
      completed: false,
      userAssigned: ''
    }
  }
}
