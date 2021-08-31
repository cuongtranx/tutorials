import { createSelector } from "@ngrx/store";

export interface MovieState {
  movie: any;
}

export interface AppState {
  ajaxExample: MovieState;
}

export const selectAjaxExample = (state: AppState) => state.ajaxExample;

export const selectMovie = createSelector(
  selectAjaxExample,
  (state: MovieState) => state.movie
);
