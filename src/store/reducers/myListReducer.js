/* eslint-disable prettier/prettier */
import * as actionTypes from '../constants/myListConstants';

const initialState = {
  myList: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MY_MOVIE_LIST:
      return {
        ...state,
        myList: action.myList,
        loading: false,
      };
    case actionTypes.FETCH_MY_MOVIE_LIST_FAILED:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case actionTypes.FETCH_MY_MOVIE_LIST:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default reducer;
