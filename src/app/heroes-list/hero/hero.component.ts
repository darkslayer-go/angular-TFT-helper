import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../../models/hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @Input() hero: Hero;
  constructor() { }

  ngOnInit(): void {
    console.log('hero:', this.hero);
  }

}
