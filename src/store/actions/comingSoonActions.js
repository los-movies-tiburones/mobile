/* eslint-disable prettier/prettier */
import {
  FETCH_COMING_SOON_MOVIES,
  FETCH_COMING_SOON_MOVIES_FAILED,
  SET_COMING_SOON_MOVIES,
} from '../constants/comingSoonConstants';

export const setComingSoon = (comingSoon) => {
  return {
    type: SET_COMING_SOON_MOVIES,
    comingSoon: comingSoon,
  };
};

export const fetchComingSoon = () => {
  return {
    type: FETCH_COMING_SOON_MOVIES,
  };
};

export const fetchMyMovieListFailed = () => {
  return {
    type: FETCH_COMING_SOON_MOVIES_FAILED,
  };
};
