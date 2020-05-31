/* eslint-disable prettier/prettier */
import * as actionTypes from '../constants/movieConstants';

const initialState = {
  movie: null,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MOVIE:
      return {
        ...state,
        movie: action.movie,
      };
    case actionTypes.FETCH_MOVIE_BY_ID_FAILED:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
