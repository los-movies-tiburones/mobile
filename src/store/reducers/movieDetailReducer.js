/* eslint-disable prettier/prettier */
import * as actionTypes from '../constants/movieConstants';

const initialState = {
  movie: null,
  recommendedMovies: [],
  error: false,
  reviews: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MOVIE:
      return {
        ...state,
        movie: action.movie,
      };
    case actionTypes.FETCH_MOVIE_BY_ID_FAILED:
      return {
        ...state,
        error: true,
      };
    case actionTypes.RATE_MOVIE_FAILED:
      return {
        ...state,
        error: true,
      };
    case actionTypes.SET_DETAIL_RECOMMENDED_MOVIES:
      return {
        ...state,
        recommendedMovies: action.recommended.filter(
          (movie) => movie.title !== action.title,
        ),
      };
    case actionTypes.FETCH_DETAIL_RECOMMENDED_MOVIES_FAILED:
      return {
        ...state,
        error: true,
      };
    case actionTypes.CLEAR_MOVIE:
      return {
        ...state,
        recommendedMovies: [],
        movie: null,
      };
    case actionTypes.SET_REVIEWS:
      return {
        ...state,
        reviews: action.reviews,
      };
    case actionTypes.FETCH_REVIEWS_FAILED:
      return {
        ...state,
        error: true,
      };
    case actionTypes.REVIEW_MOVIE_FAILED:
      return {
        ...state,
        error: true,
      };
    case actionTypes.ADD_TO_MY_LIST_FAILED:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
