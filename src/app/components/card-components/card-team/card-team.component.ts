import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/authentication/auth.service';

@Component({
  selector: 'app-card-team',
  templateUrl: './card-team.component.html',
  styleUrls: ['./card-team.component.scss']
})
export class CardTeamComponent implements OnInit {
  itemCountTeam: number = 0;
  teamText: string = '';
  team = [];

  constructor(public auth: AuthService) {}

  ngOnInit() {
    this.itemCountTeam = this.team.length;
  }
}
