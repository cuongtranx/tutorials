import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  public counter = 0;

  constructor() {}

  ngOnInit(): void {}

  public increase(): void {
    this.counter += 1;
  }
}
