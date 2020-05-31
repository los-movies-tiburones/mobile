/* eslint-disable prettier/prettier */
import {put, takeEvery} from 'redux-saga/effects';
import {setMovie, fetchMovieFailed} from '../actions/movieDetailActions';
import {FETCH_MOVIE_BY_ID} from '../constants/movieConstants';
import {backendRequest} from '../../utils/axiosService';

const fetchMovieSaga = function* fetchMovieSaga(action) {
  try {
    const response = yield backendRequest().get(`/movies/${action.id}`);
    yield put(setMovie(response.data));
  } catch (error) {
    yield put(fetchMovieFailed());
  }
};

export function* MovieDetailSaga() {
  yield takeEvery(FETCH_MOVIE_BY_ID, fetchMovieSaga);
}
