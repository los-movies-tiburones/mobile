/* eslint-disable prettier/prettier */
import {
  LOG_IN,
  USER_AUTHORIZED,
  USER_NOT_AUTHORIZED,
  REGISTER_USER,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILED,
} from '../constants/registrationConstants';

export const logIn = (username, password, navigation) => {
  return {
    type: LOG_IN,
    credentials: {username: username, password: password},
    navigation: navigation,
  };
};

export const logInSuccess = (userName, token) => {
  return {
    type: USER_AUTHORIZED,
    username: userName,
    token: token,
  };
};

export const logInFailed = () => {
  return {
    type: USER_NOT_AUTHORIZED,
  };
};

export const registerUser = (user, navigation) => {
  return {
    type: REGISTER_USER,
    user: user,
    navigation: navigation,
  };
};

export const registrationSuccess = (user) => {
  return {
    type: REGISTRATION_SUCCESS,
    user: user,
  };
};

export const registrationFailed = () => {
  return {
    type: REGISTRATION_FAILED,
  };
};
