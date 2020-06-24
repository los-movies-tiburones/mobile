/* eslint-disable prettier/prettier */
import {
  FETCH_MOVIE_BY_ID,
  SET_MOVIE,
  FETCH_MOVIE_BY_ID_FAILED,
  RATE_MOVIE,
  RATE_MOVIE_FAILED,
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

export const rateMovie = (rating, username) => {
  return {
    type: RATE_MOVIE,
    rating: rating,
    username: username,
  };
};

export const rateMovieFailed = () => {
  return {
    type: RATE_MOVIE_FAILED,
  };
};
