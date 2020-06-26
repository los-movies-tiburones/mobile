/* eslint-disable prettier/prettier */
import {put, takeEvery} from 'redux-saga/effects';
import {
  setMovie,
  fetchMovieFailed,
  rateMovieFailed,
  setDetailRecommendedMovies,
  fetchDetailRecommendedMoviesFailed,
} from '../actions/movieDetailActions';
import {
  FETCH_MOVIE_BY_ID,
  RATE_MOVIE,
  FETCH_DETAIL_RECOMMENDED_MOVIES,
} from '../constants/movieConstants';
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

const fetchDetailRecommendedMoviesSaga = function* fetchDetailRecommendedMoviesSaga(
  action,
) {
  try {
    let paramsRequest = {
      page: 0,
      size: 11,
      sort: '-averageRating',
      genres:
        action.genres.length > 3
          ? action.genres.slice(0, 3).join(',')
          : action.genres.join(','),
    };
    console.log(action.genres);
    const response = yield backendRequest().get('/movies', {
      params: paramsRequest,
    });
    yield put(setDetailRecommendedMovies(response.data, action.title));
  } catch (error) {
    yield put(fetchDetailRecommendedMoviesFailed());
  }
};

export function* MovieDetailSaga() {
  yield takeEvery(FETCH_MOVIE_BY_ID, fetchMovieSaga);
  yield takeEvery(RATE_MOVIE, rateMovieSaga);
  yield takeEvery(
    FETCH_DETAIL_RECOMMENDED_MOVIES,
    fetchDetailRecommendedMoviesSaga,
  );
}
