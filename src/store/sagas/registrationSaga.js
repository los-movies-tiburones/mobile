/* eslint-disable prettier/prettier */
import {put, takeEvery} from 'redux-saga/effects';
import {
  registrationSuccess,
  registrationFailed,
  logInSuccess,
  logInFailed,
  logIn,
} from '../actions/registrationActions';
import {LOG_IN, REGISTER_USER} from '../constants/registrationConstants';
import {backendRequest} from '../../utils/axiosService';
import {storeUsername} from '../../utils/asyncStorage';

const logInSaga = function* logInSaga(action) {
  try {
    const response = yield backendRequest().post('/login', {
      username: action.credentials.username,
      password: action.credentials.password,
    });
    yield put(
      logInSuccess(action.credentials.username, response.headers.authorization),
    );
    yield storeUsername(
      action.credentials.username,
      response.headers.authorization,
    );
    action.navigation.reset({
      index: 0,
      routes: [{name: 'OnBoardingScreen'}],
    });
  } catch (error) {
    console.log(error);
    yield put(logInFailed());
  }
};
const signUpSaga = function* signUpSaga(action) {
  try {
    yield backendRequest().post('/users/sign-up', {
      username: action.user.username,
      password: action.user.password,
    });
    yield put(registrationSuccess(action.user));
    yield put(
      logIn(action.user.username, action.user.password, action.navigation),
    );
  } catch (error) {
    console.log(error);
    yield put(registrationFailed());
  }
};

export function* RegistrationSaga() {
  yield takeEvery(LOG_IN, logInSaga);
  yield takeEvery(REGISTER_USER, signUpSaga);
}
