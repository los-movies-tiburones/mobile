/* eslint-disable prettier/prettier */
import * as actionTypes from '../constants/movieConstants';

const initialState = {
  moviesByGenre: [],
  error: false,
  loading: true,
  loadingMore: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MOVIES_BY_GENRE:
      return {
        ...state,
        moviesByGenre:
          state.moviesByGenre.length === 0 || action.reset
            ? action.moviesByGenre
            : [...state.moviesByGenre, ...action.moviesByGenre],
        loading: false,
        loadingMore: false,
      };
    case actionTypes.FETCH_MOVIES_BY_GENRE_FAILED:
      return {
        ...state,
        error: true,
      };
    case actionTypes.LOADING_MORE:
      return {
        ...state,
        loadingMore: true,
      };
    case actionTypes.CLEAR_MOVIES:
      return {
        ...state,
        moviesByGenre: [],
      };
    default:
      return state;
  }
};

export default reducer;
