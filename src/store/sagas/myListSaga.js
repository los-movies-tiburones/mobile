/* eslint-disable prettier/prettier */
import {put, takeEvery} from 'redux-saga/effects';
import {setMyMovieList, fetchMyMovieListFailed} from '../actions/myListActions';
import {FETCH_MY_MOVIE_LIST} from '../constants/myListConstants';
import {backendRequest} from '../../utils/axiosService';

const fetchMyMovieListSaga = function* fetchMyMovieListSaga(action) {
  try {
    const response = yield backendRequest(action.token).get(
      '/movies/favorites',
    );
    yield put(setMyMovieList(response.data));
  } catch (error) {
    console.log(error);
    yield put(fetchMyMovieListFailed());
  }
};

export function* MyListSaga() {
  yield takeEvery(FETCH_MY_MOVIE_LIST, fetchMyMovieListSaga);
}
