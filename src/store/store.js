/* eslint-disable prettier/prettier */
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index';

import {MoviesSaga} from './sagas/moviesSaga';

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();

// Redux: Store
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, createLogger()),
);

// Middleware: Redux Saga
sagaMiddleware.run(MoviesSaga);

// Exports
export {store};
