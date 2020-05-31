/* eslint-disable prettier/prettier */
import {put, takeEvery} from 'redux-saga/effects';
import {
  setMovies,
  fetchAllMoviesFailed,
  changeTitle,
} from '../actions/movieActions';
import {FETCH_ALL_MOVIES} from '../constants/movieConstants';
import {backendRequest} from '../../utils/axiosService';

const fetchMoviesSaga = function* fetchMoviesSaga(action) {
  try {
    let paramsRequest = {
      page: action.page,
      size: 9,
    };
    if (action.title) paramsRequest.title = action.title;
    if (action.sort) paramsRequest.sort = action.sort;
    if (action.genres.length) paramsRequest.genres = action.genres.join(',');

    const response = yield backendRequest().get('/movies', {
      params: paramsRequest,
    });

    yield put(changeTitle(action.title));
    yield put(setMovies(response.data, action.page === 0));
    if (response.data.length === 0) yield put(fetchAllMoviesFailed());
  } catch (error) {
    yield put(fetchAllMoviesFailed());
  }
};

export function* MoviesSaga() {
  yield takeEvery(FETCH_ALL_MOVIES, fetchMoviesSaga);
}
