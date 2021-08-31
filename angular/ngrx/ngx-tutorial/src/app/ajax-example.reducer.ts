import { createReducer, on } from "@ngrx/store";
import { fetchMovies, fetchedMovies } from "./ajax-example.actions";
import { LoadingState, ErrorState, CallState } from "./ajax-example.store";

export interface ResultState {
  movie: any;
  callState: CallState;
}

const initialState: ResultState = {
  movie: null,
  callState: LoadingState.INIT
};

const _ajaxReducer = createReducer(
  initialState,
  on(fetchMovies, prevState => {
    return {
      ...prevState,
      callState: LoadingState.LOADING
    };
  }),
  on(fetchedMovies, (prevState, action) => {
    return {
      ...prevState,
      movie: action.movie,
      callState: LoadingState.LOADED
    };
  })
);

export function ajaxExampleReducer(state, action) {
  return _ajaxReducer(state, action);
}
