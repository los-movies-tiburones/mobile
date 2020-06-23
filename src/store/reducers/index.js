/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';
import movieReducer from './movieReducer';
import movieDetailReducer from './movieDetailReducer';
import topGenreReducer from './topGenreReducer';
import genreReducer from './genreReducer';
import registrationReducer from './registrationReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  movieDetail: movieDetailReducer,
  topGenre: topGenreReducer,
  genre: genreReducer,
  registration: registrationReducer,
});

export default rootReducer;
