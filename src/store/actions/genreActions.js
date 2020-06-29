/* eslint-disable prettier/prettier */
import {
  FETCH_TOP_MOVIES_BY_GENRE,
  SET_TOP_MOVIES_BY_GENRE,
  FETCH_TOP_MOVIES_BY_GENRE_FAILED,
  FETCH_GENRES,
  FETCH_GENRES_FAILED,
  SET_GENRES,
  FETCH_MOVIES_BY_GENRE,
  FETCH_MOVIES_BY_GENRE_FAILED,
  SET_MOVIES_BY_GENRE,
  LOADING_MORE,
  CLEAR_MOVIES,
  FETCH_TOP_100,
  FETCH_TOP_100_FAILED,
  SET_TOP_100,
  FETCH_RECOMMENDED_MOVIES,
  FETCH_RECOMMENDED_MOVIES_FAILED,
  SET_RECOMMENDED_MOVIES,
} from '../constants/movieConstants';

export const setTopMoviesByGenre = (movies) => {
  return {
    type: SET_TOP_MOVIES_BY_GENRE,
    movies: movies,
  };
};

export const fetchTopMoviesByGenre = (allGenres) => {
  return {
    type: FETCH_TOP_MOVIES_BY_GENRE,
    allGenres: allGenres,
  };
};

export const fetchTopMoviesByGenreFailed = () => {
  return {
    type: FETCH_TOP_MOVIES_BY_GENRE_FAILED,
  };
};

export const setGenres = (genres) => {
  return {
    type: SET_GENRES,
    genres: genres,
  };
};

export const fetchGenres = () => {
  return {
    type: FETCH_GENRES,
  };
};

export const fetchGenresFailed = () => {
  return {
    type: FETCH_GENRES_FAILED,
  };
};

export const setMoviesByGenre = (movies, reset) => {
  return {
    type: SET_MOVIES_BY_GENRE,
    moviesByGenre: movies,
    reset: reset,
  };
};

export const fetchMoviesByGenre = (genre, page) => {
  return {
    type: FETCH_MOVIES_BY_GENRE,
    genre: genre,
    page: page,
  };
};

export const fetchMoviesByGenreFailed = () => {
  return {
    type: FETCH_MOVIES_BY_GENRE_FAILED,
  };
};

export const loadMore = () => {
  return {
    type: LOADING_MORE,
  };
};

export const clearMovies = () => {
  return {
    type: CLEAR_MOVIES,
  };
};

export const setTop100 = (movies) => {
  return {
    type: SET_TOP_100,
    top100: movies,
  };
};

export const fetchTop100 = () => {
  return {
    type: FETCH_TOP_100,
  };
};

export const fetchTop100Failed = () => {
  return {
    type: FETCH_TOP_100_FAILED,
  };
};

export const setRecommendedMovies = (movies) => {
  return {
    type: SET_RECOMMENDED_MOVIES,
    recommended: movies,
  };
};

export const fetchRecommendedMovies = (token) => {
  return {
    type: FETCH_RECOMMENDED_MOVIES,
    token: token,
  };
};

export const fetchRecommendedMoviesFailed = () => {
  return {
    type: FETCH_RECOMMENDED_MOVIES_FAILED,
  };
};
