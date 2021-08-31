import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { increment, decrement, reset } from "../counter.actions";

@Component({
  selector: "my-counter",
  templateUrl: "./my-counter.component.html",
  styleUrls: ["./my-counter.component.scss"]
})
export class MyCounterComponent implements OnInit {
  public count$: Observable<number>;
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select("count"));
  }

  ngOnInit(): void {}

  public increment(): void {
    this.store.dispatch(increment());
  }
  public decrement(): void {
    this.store.dispatch(decrement());
  }
  public reset(): void {
    this.store.dispatch(reset());
  }
}
