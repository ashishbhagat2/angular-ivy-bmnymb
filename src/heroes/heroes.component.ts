import { Component, OnInit } from '@angular/core';
import { Hero } from '../app/hero';
import { HEROES } from '../app/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor() {}

  heroes = HEROES;

  selectedHero?: Hero;


  ngOnInit() {}

  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
}


