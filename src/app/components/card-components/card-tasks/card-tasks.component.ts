import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-tasks',
  templateUrl: './card-tasks.component.html',
  styleUrls: ['./card-tasks.component.scss']
})
export class CardTasksComponent implements OnInit {
  itemCountTasks: number;
  taskText: string = '';
  tasks = [];
  constructor() {}

  ngOnInit() {
    this.itemCountTasks = this.tasks.length;
  }

  addItem() {
    this.tasks.push(this.taskText);
    this.taskText = '';
    this.itemCountTasks = this.tasks.length;
  }
}
