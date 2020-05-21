import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../models/item';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  @Input() items: Item[];
  constructor() { }

  ngOnInit(): void {
  }

}
