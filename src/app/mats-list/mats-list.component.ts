import { Component, OnInit } from '@angular/core';
import {Mat} from '../models/mat';
import {TFTService} from '../tft.service';

@Component({
  selector: 'app-mats-list',
  templateUrl: './mats-list.component.html',
  styleUrls: ['./mats-list.component.css']
})
export class MatsListComponent implements OnInit {
  matList: Mat[];
  constructor(private sv: TFTService) { }

  ngOnInit(): void {
    this.matList = this.sv.getMatList();
  }

}
