/* eslint-disable prettier/prettier */
import * as actionTypes from '../constants/comingSoonConstants';

const initialState = {
  comingSoon: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_COMING_SOON_MOVIES:
      return {
        ...state,
        comingSoon: action.comingSoon,
      };
    case actionTypes.FETCH_COMING_SOON_MOVIES_FAILED:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
