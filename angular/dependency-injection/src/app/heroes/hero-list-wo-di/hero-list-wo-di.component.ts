import { Component, OnInit } from "@angular/core";
import { HEROES } from "../mock-heroes";

@Component({
  selector: "app-hero-list-wo-di",
  templateUrl: "./hero-list-wo-di.component.html",
  styleUrls: ["./hero-list-wo-di.component.scss"]
})
export class HeroListWoDiComponent implements OnInit {
  heroes = HEROES;
  constructor() {}

  ngOnInit(): void {}
}
