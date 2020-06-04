/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';
import movieReducer from './movieReducer';
import movieDetailReducer from './movieDetailReducer';
import topGenreReducer from './topGenreReducer';
import genreReducer from './genreReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  movieDetail: movieDetailReducer,
  topGenre: topGenreReducer,
  genre: genreReducer,
});

export default rootReducer;
