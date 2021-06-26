import { Component, OnInit } from '@angular/core';
import { Hero } from '../app/hero';
import { HEROES } from '../app/mock-heroes';
import { HeroService } from '../app/hero.service';
import { MessageService } from '../app/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  heroes: Hero[] = [];

  selectedHero?: Hero;

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}
