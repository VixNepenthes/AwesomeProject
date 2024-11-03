//TODO: store.js
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/reducers';
import rootSaga from './saga';

/**
 * TODO: create store with rootReducer and sagaMiddleware
 * add middleware to debug redux in browser
 *
 */

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default store;
