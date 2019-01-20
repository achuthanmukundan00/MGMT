import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-team',
  templateUrl: './card-team.component.html',
  styleUrls: ['./card-team.component.scss']
})
export class CardTeamComponent implements OnInit {
  itemCountTeam: number = 0;
  teamText: string = '';
  team = [];

  constructor() {}

  ngOnInit() {
    this.itemCountTeam = this.team.length;
  }
}
