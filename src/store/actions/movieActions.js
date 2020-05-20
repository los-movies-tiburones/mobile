/* eslint-disable prettier/prettier */
import {
  FETCH_ALL_MOVIES,
  SET_MOVIES,
  FETCH_ALL_MOVIES_FAILED,
  REFRESH,
  LOADING_MORE,
} from '../constants/movieConstants';

export const setMovies = (movies) => {
  return {
    type: SET_MOVIES,
    movies: movies,
  };
};

export const fetchAllMovies = (page) => {
  return {
    type: FETCH_ALL_MOVIES,
    page: page,
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
