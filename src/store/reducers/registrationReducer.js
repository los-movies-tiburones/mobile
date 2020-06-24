/* eslint-disable prettier/prettier */
import * as actionTypes from '../constants/registrationConstants';

const initialState = {
  username: '',
  loading: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_AUTHORIZED:
      return {
        ...state,
        username: action.username,
        loading: false,
      };
    case actionTypes.USER_NOT_AUTHORIZED:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case actionTypes.LOG_IN:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case actionTypes.REGISTER_USER:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case actionTypes.REGISTRATION_SUCCESS:
      return {
        ...state,
        username: action.user.username,
        loading: false,
      };
    case actionTypes.REGISTRATION_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
