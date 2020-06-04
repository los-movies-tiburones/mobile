/* eslint-disable prettier/prettier */
import * as actionTypes from '../constants/movieConstants';

const initialState = {
  moviesByGenre: [],
  genres: [],
  top100: [],
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TOP_MOVIES_BY_GENRE:
      return {
        ...state,
        moviesByGenre: [
          ...state.moviesByGenre,
          {genre: action.genre, movies: action.movies},
        ],
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
    default:
      return state;
  }
};

export default reducer;
