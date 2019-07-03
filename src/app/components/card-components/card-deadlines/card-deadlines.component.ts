import { Component, OnInit } from '@angular/core';
import { Deadline } from 'src/app/models/project';
import { DeadlineService } from 'src/app/core/services/deadline.service';

@Component({
  selector: 'app-card-deadlines',
  templateUrl: './card-deadlines.component.html',
  styleUrls: ['./card-deadlines.component.scss']
})
export class CardDeadlinesComponent implements OnInit {
  deadlines: Deadline[];

  constructor(private deadlineService: DeadlineService) { 
  }

  ngOnInit() {
    this.deadlineService.getDeadlines();
    this.deadlines = this.deadlineService.deadlines;
  }




  
}
