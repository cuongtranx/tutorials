import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

import { fetchMovies } from "../ajax-example.actions";
import { selectMovie } from "../ajax-example.selectors";

@Component({
  selector: "ajax-example",
  templateUrl: "./ajax-example.component.html",
  styleUrls: ["./ajax-example.component.scss"]
})
export class AjaxExampleComponent implements OnInit {
  public movie$: Observable<any>;

  constructor(
    private store: Store<{ ajaxExample: { movie: any } }>,
    private httpClient: HttpClient
  ) {
    this.movie$ = store.pipe(select(selectMovie));
  }

  ngOnInit(): void {}

  public onClickFetchMovies() {
    this.store.dispatch(fetchMovies());
  }
}
