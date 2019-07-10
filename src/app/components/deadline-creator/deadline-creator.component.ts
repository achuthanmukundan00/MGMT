import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../core/authentication/auth.service';
import { Deadline } from '../../models/project';
import { DeadlineService } from '../../core/services/deadline.service';

@Component({
  selector: 'app-deadline-creator',
  templateUrl: './deadline-creator.component.html',
  styleUrls: ['./deadline-creator.component.scss']
})
export class DeadlineCreatorComponent implements OnInit {
  deadline: Deadline = {
    name: '',
    date: '',
    tasks: []
  };

  @Output() outputToParent = new EventEmitter<boolean>();

  constructor(public auth: AuthService, private deadlineService: DeadlineService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.deadlineService.getDeadlines;
    if (this.deadline.name !== '' && this.deadline.date !== '') {
      console.log(this.deadline);
      this.deadlineService.addDeadline(this.deadline);
    }

    this.outputToParent.emit(true);

    this.deadline = {
      name: '',
      date: '',
      tasks: []
    };
  }
}
