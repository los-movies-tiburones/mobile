/* eslint-disable prettier/prettier */
import * as actionTypes from '../constants/movieConstants';

const initialState = {
  movies: [],
  loading: true,
  loadingMore: false,
  refreshing: false,
  activeSearch: false,
  title: '',
  sort: '',
  genres: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MOVIES:
      return {
        ...state,
        movies:
          state.movies.length === 0 || action.reset
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
    case actionTypes.CHANGE_SEARCH:
      return {
        ...state,
        activeSearch: !state.activeSearch,
        title: '',
        sort: '',
        genres: [],
      };
    case actionTypes.CHANGE_TITLE:
      return {
        ...state,
        title: action.title,
      };
    case actionTypes.CLEAR_MOVIES:
      return {
        ...state,
        movies: [],
      };
    case actionTypes.CHANGE_SORT_OPTION:
      return {
        ...state,
        sort: action.option,
      };
    case actionTypes.CHANGE_GENRES:
      return {
        ...state,
        genres: action.genres,
      };
    case actionTypes.FETCH_ALL_MOVIES:
      return {
        ...state,
        loading: action.page === 0 ? true : false,
      };
    default:
      return state;
  }
};

export default reducer;
