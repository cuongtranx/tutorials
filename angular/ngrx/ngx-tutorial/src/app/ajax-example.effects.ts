import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpClient } from "@angular/common/http";
import { map, mergeMap, mergeAll, catchError, tap } from "rxjs/operators";
import { fetchMovies, fetchedMovies } from "./ajax-example.actions";

@Injectable()
export class AjaxExampleEffect {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      tap(action => console.log(action)),
      ofType(fetchMovies),
      mergeMap(() => {
        return this.getMovie().pipe(
          map(movie => {
            return fetchedMovies({ movie: movie });
          })
        );
      }),
      tap(() => console.log("FETCHED"))
    )
  );

  constructor(private actions$: Actions, private httpClient: HttpClient) {}

  getMovie() {
    return this.httpClient.get(
      "https://api.themoviedb.org/3/movie/550?api_key=get_yo_own_key"
    );
  }
}
