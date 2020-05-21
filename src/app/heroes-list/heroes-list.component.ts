import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../models/hero';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
  @Input() heroes: Hero[];
  constructor() { }

  ngOnInit(): void {
    console.log('heroes:', this.heroes);
  }

}
