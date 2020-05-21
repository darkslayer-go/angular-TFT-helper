import { Component, OnInit } from '@angular/core';
import {Team} from '../models/team';
import {TFTService} from '../tft.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  teamList: Team[];
  constructor(private sv: TFTService) { }

  ngOnInit(): void {
    this.teamList = this.sv.getTeamList();
    console.log('teamList', this.teamList);
  }

}
