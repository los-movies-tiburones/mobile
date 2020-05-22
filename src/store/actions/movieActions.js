/* eslint-disable prettier/prettier */
import {
  FETCH_ALL_MOVIES,
  SET_MOVIES,
  FETCH_ALL_MOVIES_FAILED,
  REFRESH,
  LOADING_MORE,
  CHANGE_SEARCH,
  CHANGE_TITLE,
  CLEAR_MOVIES,
  CHANGE_SORT_OPTION,
  CHANGE_GENRES,
} from '../constants/movieConstants';

export const setMovies = (movies, reset) => {
  return {
    type: SET_MOVIES,
    movies: movies,
    reset: reset,
  };
};

export const fetchAllMovies = (page, title, sort, genres) => {
  return {
    type: FETCH_ALL_MOVIES,
    page: page,
    title: title,
    sort: sort,
    genres: genres,
  };
};

export const fetchAllMoviesFailed = () => {
  return {
    type: FETCH_ALL_MOVIES_FAILED,
  };
};

export const refresh = () => {
  return {
    type: REFRESH,
  };
};

export const loadMore = () => {
  return {
    type: LOADING_MORE,
  };
};

export const changeSearchState = () => {
  return {
    type: CHANGE_SEARCH,
  };
};

export const changeTitle = (title) => {
  return {
    type: CHANGE_TITLE,
    title: title,
  };
};

export const clearMovies = () => {
  return {
    type: CLEAR_MOVIES,
  };
};

export const changeSortOption = (option) => {
  return {
    type: CHANGE_SORT_OPTION,
    option: option,
  };
};

export const changeGenres = (genres) => {
  return {
    type: CHANGE_GENRES,
    genres: genres,
  };
};
