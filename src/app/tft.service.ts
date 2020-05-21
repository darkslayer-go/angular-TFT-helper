import { Injectable } from '@angular/core';
import {TeamList} from './mock-data/mock-teamList';
import {ItemList} from './mock-data/mock-itemList';
import {MatList} from './mock-data/mock-matList';

@Injectable({
  providedIn: 'root'
})
export class TFTService {

  constructor() { }

  getTeamList() {
    return TeamList;
  }

  getItemList() {
    return ItemList;
  }

  getMatList() {
    return MatList;
  }
}
