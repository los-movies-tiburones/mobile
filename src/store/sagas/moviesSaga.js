/* eslint-disable prettier/prettier */
import {put, takeEvery} from 'redux-saga/effects';
import {setMovies, fetchAllMoviesFailed} from '../actions/movieActions';
import {FETCH_ALL_MOVIES} from '../constants/movieConstants';
import {backendRequest} from '../../utils/axiosService';

const fetchMoviesSaga = function* fetchMoviesSaga(action) {
  try {
    console.log(action.page);

    const response = yield backendRequest().get(
      `/movies?page=${action.page}&size=8&title=`,
    );
    yield put(setMovies(response.data));
  } catch (error) {
    yield put(fetchAllMoviesFailed());
  }
};

export function* MoviesSaga() {
  yield takeEvery(FETCH_ALL_MOVIES, fetchMoviesSaga);
}
