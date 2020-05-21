import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from '../models/item';
import {TFTService} from '../tft.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  @Input() itemList: Item[];
  @Output() eClickedItemList = new EventEmitter<Item[]>();
  @Output() eRemoveItemFromList = new EventEmitter<Item[]>();
  @Input() canDelete = false;

  clickedItemList: Item[] = [];
  constructor(private sv: TFTService) { }

  ngOnInit(): void {
    if (!this.itemList) {
      this.itemList = this.sv.getItemList();
    }
  }

  handleClickedItem(item: Item) {
    if (this.canDelete) {
      const index: number = this.itemList.indexOf(item);
      if (index !== -1) {
        this.itemList.splice(index, 1);
      }
    } else {
      this.clickedItemList.push(item);
    }
  }

  sendClickedItemList() {
    console.log('before', this.clickedItemList);
    this.eClickedItemList.emit(this.clickedItemList);
    console.log('after', this.clickedItemList);
  }


}
