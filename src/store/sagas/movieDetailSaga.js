/* eslint-disable prettier/prettier */
import {put, takeEvery} from 'redux-saga/effects';
import {
  setMovie,
  fetchMovieFailed,
  rateMovieFailed,
} from '../actions/movieDetailActions';
import {FETCH_MOVIE_BY_ID, RATE_MOVIE} from '../constants/movieConstants';
import {backendRequest} from '../../utils/axiosService';

const fetchMovieSaga = function* fetchMovieSaga(action) {
  try {
    const response = yield backendRequest().get(`/movies/${action.id}`);
    yield put(setMovie(response.data));
  } catch (error) {
    yield put(fetchMovieFailed());
  }
};

const rateMovieSaga = function* rateMovieSaga(action) {
  try {
    //const response = yield backendRequest().post(`/movies/${action.id}`);
    console.log(action.rating, action.username);
  } catch (error) {
    yield put(rateMovieFailed());
  }
};

export function* MovieDetailSaga() {
  yield takeEvery(FETCH_MOVIE_BY_ID, fetchMovieSaga);
  yield takeEvery(RATE_MOVIE, rateMovieSaga);
}
