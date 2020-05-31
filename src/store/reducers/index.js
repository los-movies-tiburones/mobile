/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';
import movieReducer from './movieReducer';
import movieDetailReducer from './movieDetailReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  movieDetail: movieDetailReducer,
});

export default rootReducer;
