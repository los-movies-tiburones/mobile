/* eslint-disable prettier/prettier */
import {put, takeEvery} from 'redux-saga/effects';
import {
  registrationSuccess,
  registrationFailed,
  logInSuccess,
  logInFailed,
} from '../actions/registrationActions';
import {LOG_IN, REGISTER_USER} from '../constants/registrationConstants';
import {backendRequest} from '../../utils/axiosService';
import {storeUsername} from '../../utils/asyncStorage';

const logInSaga = function* logInSaga(action) {
  try {
    console.log('\n\n\n\n\n', action.credentials);
    // const response = yield backendRequest().get('/login');
    yield put(logInSuccess(action.credentials.username));
    // action.navigation.navigate('GenreScreen');
    yield storeUsername(action.credentials.username);
  } catch (error) {
    yield put(logInFailed());
  }
};
const signUpSaga = function* signUpSaga(action) {
  try {
    console.log('\n\n\n\n\n', action.user);
    // const response = yield backendRequest().get('/signUp');
    yield put(registrationSuccess(action.user));
    yield storeUsername(action.user.username);
    // action.navigation.navigate('GenreScreen');
  } catch (error) {
    yield put(registrationFailed());
  }
};

export function* RegistrationSaga() {
  yield takeEvery(LOG_IN, logInSaga);
  yield takeEvery(REGISTER_USER, signUpSaga);
}
