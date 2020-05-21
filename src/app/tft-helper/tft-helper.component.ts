import { Component, OnInit } from '@angular/core';
import {Item} from '../models/item';

@Component({
  selector: 'app-tft-helper',
  templateUrl: './tft-helper.component.html',
  styleUrls: ['./tft-helper.component.css']
})
export class TftHelperComponent implements OnInit {
  clickedItemList: Item[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  getClickedItemList(items: Item[]) {
    this.clickedItemList = items;
  }

}
