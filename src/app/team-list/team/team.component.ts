import {Component, Input, OnInit} from '@angular/core';
import {Team} from '../../models/team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  @Input() team: Team;
  constructor() { }

  ngOnInit(): void {
    console.log('team', this.team);
  }

}
