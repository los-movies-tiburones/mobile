/* eslint-disable prettier/prettier */
import * as actionTypes from '../constants/movieConstants';

const initialState = {
  moviesByGenre: null,
  genres: [],
  top100: [],
  recommended: [],
  nowMovies: [],
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TOP_MOVIES_BY_GENRE:
      return {
        ...state,
        moviesByGenre: action.movies,
      };
    case actionTypes.FETCH_TOP_MOVIES_BY_GENRE_FAILED:
      return {
        ...state,
        error: true,
      };
    case actionTypes.SET_GENRES:
      return {
        ...state,
        genres: action.genres,
      };
    case actionTypes.FETCH_GENRES_FAILED:
      return {
        ...state,
        error: true,
      };
    case actionTypes.SET_TOP_100:
      return {
        ...state,
        top100: action.top100,
      };
    case actionTypes.FETCH_TOP_100_FAILED:
      return {
        ...state,
        error: true,
      };
    case actionTypes.SET_RECOMMENDED_MOVIES:
      return {
        ...state,
        recommended: action.recommended,
      };
    case actionTypes.FETCH_RECOMMENDED_MOVIES_FAILED:
      return {
        ...state,
        error: true,
      };
    case actionTypes.SET_NOW_MOVIES:
      return {
        ...state,
        nowMovies: action.nowMovies,
      };
    case actionTypes.FETCH_NOW_MOVIES_FAILED:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
