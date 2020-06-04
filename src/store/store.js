/* eslint-disable prettier/prettier */
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index';

import {MoviesSaga} from './sagas/moviesSaga';
import {MovieDetailSaga} from './sagas/movieDetailSaga';
import {GenreSaga} from './sagas/genreSaga';

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();

// Redux: Store
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, createLogger()),
);

// Middleware: Redux Saga
sagaMiddleware.run(MoviesSaga);
sagaMiddleware.run(MovieDetailSaga);
sagaMiddleware.run(GenreSaga);

// Exports
export {store};
