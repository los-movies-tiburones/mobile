/* eslint-disable prettier/prettier */
import {put, takeEvery} from 'redux-saga/effects';
import {
  setMovie,
  fetchMovieFailed,
  rateMovieFailed,
  setDetailRecommendedMovies,
  fetchDetailRecommendedMoviesFailed,
  setReviews,
  fetchReviwsFailed,
  reviewMovieFailed,
  addToMyListFailed,
} from '../actions/movieDetailActions';
import {
  FETCH_MOVIE_BY_ID,
  RATE_MOVIE,
  FETCH_DETAIL_RECOMMENDED_MOVIES,
  FETCH_REVIEWS,
  REVIEW_MOVIE,
  ADD_TO_MY_LIST,
} from '../constants/movieConstants';
import {backendRequest} from '../../utils/axiosService';

const fetchMovieSaga = function* fetchMovieSaga(action) {
  try {
    const response = yield backendRequest(action.token).get(
      `/movies/${action.id}`,
    );
    yield put(setMovie(response.data));
  } catch (error) {
    yield put(fetchMovieFailed());
  }
};

const rateMovieSaga = function* rateMovieSaga(action) {
  try {
    yield backendRequest(action.token).post(
      `/movies/${action.id}/ratings`,
      JSON.stringify(action.rating),
    );
  } catch (error) {
    console.log(error.response.status);
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
    const response = yield backendRequest().get('/movies', {
      params: paramsRequest,
    });
    yield put(setDetailRecommendedMovies(response.data, action.title));
  } catch (error) {
    yield put(fetchDetailRecommendedMoviesFailed());
  }
};

const fetchReviewsSaga = function* fetchReviewsSaga(action) {
  try {
    const burnedReviews = [
      {
        title: 'Clarisee Arzina',
        subtitle: 'Times',
        information:
          'Though it\'s not the most original or beautifully animated kids\' movie out there, "Balto" is engaging, and kids will probably be quite entertained.',
      },
      {
        title: 'Daniela Pepa',
        subtitle: 'Independent(UK)',
        information:
          'Though it\'s not the most original or beautifully animated kids\' movie out there, "Balto" is engaging, and kids will probably be quite entertained.',
      },
      {
        title: 'Clarisee Arzina',
        subtitle: 'Times',
        information:
          'Though it\'s not the most original or beautifully animated kids\' movie out there, "Balto" is engaging, and kids will probably be quite entertained.',
      },
      {
        title: 'Daniela Pepa',
        subtitle: 'Independent(UK)',
        information:
          'Though it\'s not the most original or beautifully animated kids\' movie out there, "Balto" is engaging, and kids will probably be quite entertained.',
      },
      {
        title: 'Clarisee Arzina',
        subtitle: 'Times',
        information:
          'Though it\'s not the most original or beautifully animated kids\' movie out there, "Balto" is engaging, and kids will probably be quite entertained.',
      },
      {
        title: 'Daniela Pepa',
        subtitle: 'Independent(UK)',
        information:
          'Though it\'s not the most original or beautifully animated kids\' movie out there, "Balto" is engaging, and kids will probably be quite entertained.',
      },
      {
        title: 'Clarisee Arzina',
        subtitle: 'Times',
        information:
          'Though it\'s not the most original or beautifully animated kids\' movie out there, "Balto" is engaging, and kids will probably be quite entertained.',
      },
      {
        title: 'Daniela Pepa',
        subtitle: 'Independent(UK)',
        information:
          'Though it\'s not the most original or beautifully animated kids\' movie out there, "Balto" is engaging, and kids will probably be quite entertained.',
      },
    ];
    yield put(setReviews(burnedReviews));
  } catch (error) {
    yield put(fetchReviwsFailed());
  }
};

const reviewMovieSaga = function* reviewMovieSaga(action) {
  try {
    yield backendRequest(action.token).post(
      `/movies/${action.id}/reviews`,
      JSON.stringify(action.review),
    );
  } catch (error) {
    console.log(error.response.status);
    yield put(reviewMovieFailed());
  }
};

const addMovieToListSaga = function* addMovieToListSaga(action) {
  try {
    yield backendRequest(action.token).post(`/movies/${action.id}/favorites`);
  } catch (error) {
    yield put(addToMyListFailed());
  }
};

export function* MovieDetailSaga() {
  yield takeEvery(FETCH_MOVIE_BY_ID, fetchMovieSaga);
  yield takeEvery(RATE_MOVIE, rateMovieSaga);
  yield takeEvery(
    FETCH_DETAIL_RECOMMENDED_MOVIES,
    fetchDetailRecommendedMoviesSaga,
  );
  yield takeEvery(FETCH_REVIEWS, fetchReviewsSaga);
  yield takeEvery(REVIEW_MOVIE, reviewMovieSaga);
  yield takeEvery(ADD_TO_MY_LIST, addMovieToListSaga);
}
