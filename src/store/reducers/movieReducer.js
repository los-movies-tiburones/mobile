/* eslint-disable prettier/prettier */
import * as actionTypes from '../constants/movieConstants';

const initialState = {
  movies: [],
  loading: true,
  loadingMore: false,
  refreshing: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MOVIES:
      return {
        ...state,
        movies:
          state.movies.length === 0
            ? action.movies
            : [...state.movies, ...action.movies],
        loading: false,
        loadingMore: false,
        refreshing: false,
        error: false,
      };
    case actionTypes.FETCH_ALL_MOVIES_FAILED:
      return {
        ...state,
        error: true,
      };
    case actionTypes.REFRESH:
      return {
        ...state,
        refreshing: true,
        movies: [],
      };
    case actionTypes.LOADING_MORE:
      return {
        ...state,
        loadingMore: true,
      };
    default:
      return state;
  }
};

export default reducer;
