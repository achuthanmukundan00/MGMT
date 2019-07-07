import { Component, OnInit } from '@angular/core';
import { Deadline, Project } from 'src/app/models/project';
import { DeadlineService } from 'src/app/core/services/deadline.service';

@Component({
  selector: 'app-card-deadlines',
  templateUrl: './card-deadlines.component.html',
  styleUrls: ['./card-deadlines.component.scss']
})
export class CardDeadlinesComponent implements OnInit {
  deadlines: Deadline[];
  currentProject: Project;

  constructor(private deadlineService: DeadlineService) { 
  }

  ngOnInit() {
    this.deadlineService.getDeadlines();
    this.deadlines = this.deadlineService.deadlines;
    this.currentProject = this.deadlineService.currentProject;
  }

  deleteDeadline(i) {
    this.deadlines.splice(i, 1);
    this.deadlineService.updateDeadlines(this.deadlines);
  }


  
}
