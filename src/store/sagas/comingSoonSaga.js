/* eslint-disable prettier/prettier */
import {put, takeEvery} from 'redux-saga/effects';
import {
  setComingSoon,
  fetchMyMovieListFailed,
} from '../actions/comingSoonActions';
import {FETCH_COMING_SOON_MOVIES} from '../constants/comingSoonConstants';
import {movieAPIRequest, MOVIE_API_KEY} from '../../utils/axiosService';

const fetchComingSoonSaga = function* fetchComingSoonSaga(action) {
  try {
    const response = yield movieAPIRequest().get(
      `/upcoming?api_key=${MOVIE_API_KEY}&language=en-US&page=1`,
    );
    yield put(setComingSoon(response.data.results));
  } catch (error) {
    console.log(error);
    yield put(fetchMyMovieListFailed());
  }
};

export function* ComingSoonSaga() {
  yield takeEvery(FETCH_COMING_SOON_MOVIES, fetchComingSoonSaga);
}
