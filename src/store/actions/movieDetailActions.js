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
  FETCH_REVIEWS,
  FETCH_REVIEWS_FAILED,
  SET_REVIEWS,
  REVIEW_MOVIE,
  REVIEW_MOVIE_FAILED,
  ADD_TO_MY_LIST,
  ADD_TO_MY_LIST_FAILED,
} from '../constants/movieConstants';

export const setMovie = (movie) => {
  return {
    type: SET_MOVIE,
    movie: movie,
  };
};

export const fetchMovie = (id, token) => {
  return {
    type: FETCH_MOVIE_BY_ID,
    id: id,
    token: token,
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

export const setReviews = (reviews) => {
  return {
    type: SET_REVIEWS,
    reviews: reviews,
  };
};

export const fetchReviews = (id) => {
  return {
    type: FETCH_REVIEWS,
    id: id,
  };
};

export const fetchReviwsFailed = () => {
  return {
    type: FETCH_REVIEWS_FAILED,
  };
};

export const reviewMovie = (id, review, token) => {
  return {
    type: REVIEW_MOVIE,
    review: review,
    token: token,
    id: id,
  };
};

export const reviewMovieFailed = () => {
  return {
    type: REVIEW_MOVIE_FAILED,
  };
};

export const addToMyList = (id, token) => {
  return {
    type: ADD_TO_MY_LIST,
    token: token,
    id: id,
  };
};

export const addToMyListFailed = () => {
  return {
    type: ADD_TO_MY_LIST_FAILED,
  };
};
