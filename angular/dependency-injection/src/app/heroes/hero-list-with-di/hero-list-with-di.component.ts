imporo { Component, OnInit } from '@angular/core';

//import { Hero } from "../hero";
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-hero-list-with-di',
  templateUrl: './hero-list-with-di.component.html',
  styleUrls: ['./hero-list-with-di.component.scss']
})
export class HeroListWithDiComponent implements OnInit {

   heroes;

  constructor() {
      this.heroes = HeroService.getHeroes();
  }

  ngOnInit(): void {
  }

}
