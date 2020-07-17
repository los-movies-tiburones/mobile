/* eslint-disable prettier/prettier */
import {
  FETCH_MY_MOVIE_LIST,
  FETCH_MY_MOVIE_LIST_FAILED,
  SET_MY_MOVIE_LIST,
} from '../constants/myListConstants';

export const setMyMovieList = (myList) => {
  return {
    type: SET_MY_MOVIE_LIST,
    myList: myList,
  };
};

export const fetchMyMovieList = (token) => {
  return {
    type: FETCH_MY_MOVIE_LIST,
    token: token,
  };
};

export const fetchMyMovieListFailed = () => {
  return {
    type: FETCH_MY_MOVIE_LIST_FAILED,
  };
};
