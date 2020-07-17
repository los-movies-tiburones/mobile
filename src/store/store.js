/* eslint-disable prettier/prettier */
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index';

import {MoviesSaga} from './sagas/moviesSaga';
import {MovieDetailSaga} from './sagas/movieDetailSaga';
import {GenreSaga} from './sagas/genreSaga';
import {RegistrationSaga} from './sagas/registrationSaga';
import {MyListSaga} from './sagas/myListSaga';
import {ComingSoonSaga} from './sagas/comingSoonSaga';

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();

// Redux: Store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Run sagas into middleware
sagaMiddleware.run(MoviesSaga);
sagaMiddleware.run(MovieDetailSaga);
sagaMiddleware.run(GenreSaga);
sagaMiddleware.run(RegistrationSaga);
sagaMiddleware.run(MyListSaga);
sagaMiddleware.run(ComingSoonSaga);

// Exports
export {store};
