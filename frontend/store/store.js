import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';
import RootReducer from '../reducers/RootReducer';

export default (preloadedState = {}) =>
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(ReduxThunk, ReduxLogger)
  );