/* eslint-disable prettier/prettier */
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index';

import {MoviesSaga} from './sagas/moviesSaga';
import {MovieDetailSaga} from './sagas/movieDetailSaga';
import {GenreSaga} from './sagas/genreSaga';
import {RegistrationSaga} from './sagas/registrationSaga';

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();

// Redux: Store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Middleware: Redux Saga
sagaMiddleware.run(MoviesSaga);
sagaMiddleware.run(MovieDetailSaga);
sagaMiddleware.run(GenreSaga);
sagaMiddleware.run(RegistrationSaga);

// Exports
export {store};
