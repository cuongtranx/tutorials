import { createAction, props } from "@ngrx/store";

export const fetchMovies = createAction(
  "[Ajax Example Component ] Fetch Movies"
);

export const fetchedMovies = createAction(
  "[Ajax Example Component ] Fetched Movies",
  props<{ movie: any }>()
);
