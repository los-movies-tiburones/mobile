/* eslint-disable prettier/prettier */
import {
  FETCH_MOVIE_BY_ID,
  SET_MOVIE,
  FETCH_MOVIE_BY_ID_FAILED,
} from '../constants/movieConstants';

export const setMovie = (movie) => {
  return {
    type: SET_MOVIE,
    movie: movie,
  };
};

export const fetchMovie = (id) => {
  return {
    type: FETCH_MOVIE_BY_ID,
    id: id,
  };
};

export const fetchMovieFailed = () => {
  return {
    type: FETCH_MOVIE_BY_ID_FAILED,
  };
};
