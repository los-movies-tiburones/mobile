/* eslint-disable prettier/prettier */
import {
  FETCH_MOVIE_BY_ID,
  SET_MOVIE,
  FETCH_MOVIE_BY_ID_FAILED,
  RATE_MOVIE,
  RATE_MOVIE_FAILED,
  FETCH_DETAIL_RECOMMENDED_MOVIES,
  SET_DETAIL_RECOMMENDED_MOVIES,
  FETCH_DETAIL_RECOMMENDED_MOVIES_FAILED,
  CLEAR_MOVIE,
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

export const rateMovie = (id, rating, token) => {
  return {
    type: RATE_MOVIE,
    rating: rating,
    token: token,
    id: id,
  };
};

export const rateMovieFailed = () => {
  return {
    type: RATE_MOVIE_FAILED,
  };
};

export const setDetailRecommendedMovies = (movies, title) => {
  return {
    type: SET_DETAIL_RECOMMENDED_MOVIES,
    recommended: movies,
    title: title,
  };
};

export const fetchDetailRecommendedMovies = (genres, title) => {
  return {
    type: FETCH_DETAIL_RECOMMENDED_MOVIES,
    genres: genres,
    title: title,
  };
};

export const fetchDetailRecommendedMoviesFailed = () => {
  return {
    type: FETCH_DETAIL_RECOMMENDED_MOVIES_FAILED,
  };
};

export const clearMovie = () => {
  return {
    type: CLEAR_MOVIE,
  };
};
