/* eslint-disable prettier/prettier */
import {put, takeEvery} from 'redux-saga/effects';
import {
  setTopMoviesByGenre,
  fetchTopMoviesByGenreFailed,
  setGenres,
  fetchGenresFailed,
  setMoviesByGenre,
  fetchMoviesByGenreFailed,
  fetchTop100Failed,
  setTop100,
  setRecommendedMovies,
  fetchRecommendedMoviesFailed,
} from '../actions/genreActions';
import {
  FETCH_TOP_MOVIES_BY_GENRE,
  FETCH_GENRES,
  FETCH_MOVIES_BY_GENRE,
  FETCH_TOP_100,
  FETCH_RECOMMENDED_MOVIES,
} from '../constants/movieConstants';
import {backendRequest} from '../../utils/axiosService';

const fetchTopMoviesByGenreSaga = function* fetchTopMoviesByGenreSaga(action) {
  try {
    const response = yield backendRequest().get(
      `/movies/top-rating?genres=${action.allGenres.join(',')}`,
    );
    yield put(setTopMoviesByGenre(response.data));
  } catch (error) {
    yield put(fetchTopMoviesByGenreFailed());
  }
};

const fetchTopMovies = function* fetchTopMovies(action) {
  try {
    const response = yield backendRequest().get('/movies/top-rating', {});
    yield put(setTop100(response.data));
  } catch (error) {
    console.log(error);
    yield put(fetchTop100Failed());
  }
};

const fetchMoviesByGenreSaga = function* fetchMoviesByGenreSaga(action) {
  try {
    let paramsRequest = {
      page: action.page,
      size: 12,
    };
    let endpoint;
    if (action.genre !== 'Top 100') {
      paramsRequest.genres = action.genre;
      paramsRequest.sort = '-averageRating';
      endpoint = '/movies';
    } else {
      endpoint = '/movies/top-rating';
    }
    const response = yield backendRequest().get(endpoint, {
      params: paramsRequest,
    });
    yield put(setMoviesByGenre(response.data, action.page === 0));
  } catch (error) {
    console.log(error);
    yield put(fetchMoviesByGenreFailed());
  }
};

const fetchGenresSaga = function* fetchGenresSaga(action) {
  try {
    const response = yield backendRequest().get('/movies/genres');
    yield put(setGenres(response.data));
  } catch (error) {
    yield put(fetchGenresFailed());
  }
};

const fetchRecommendedMoviesSaga = function* fetchRecommendedMoviesSaga(
  action,
) {
  try {
    const response = yield backendRequest(action.token).get(
      '/movies/recommendations',
    );
    yield put(setRecommendedMovies(response.data));
  } catch (error) {
    yield put(fetchRecommendedMoviesFailed());
  }
};

export function* GenreSaga() {
  yield takeEvery(FETCH_TOP_MOVIES_BY_GENRE, fetchTopMoviesByGenreSaga);
  yield takeEvery(FETCH_MOVIES_BY_GENRE, fetchMoviesByGenreSaga);
  yield takeEvery(FETCH_GENRES, fetchGenresSaga);
  yield takeEvery(FETCH_TOP_100, fetchTopMovies);
  yield takeEvery(FETCH_RECOMMENDED_MOVIES, fetchRecommendedMoviesSaga);
}
