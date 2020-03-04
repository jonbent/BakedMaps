import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';
import RootReducer from '../reducers/RootReducer';
import FiltersReducer from '../reducers/FiltersReducer';
import { persistStore, persistReducer, createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createBlacklistFilter } from 'redux-persist-transform-filter';
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['entities', 'session', 'errors'],
  transforms: [
    createBlacklistFilter('UIReducer', ['filters', 'menuItemSize']),
  //   createTransform(
  //     state => state,
  //     state => {
  //       return Object.assign({}, state, {
  //         ui: state.session,
  //       })
  //     }
  //   ),
  ],
}
const persistedReducer = persistReducer(persistConfig, RootReducer);
const middlewares = [ReduxThunk];
if (process.env.NODE_ENV === 'development') middlewares.push(ReduxLogger);
export default (preloadedState = {}) =>{
  let store = createStore(
    persistedReducer,
    preloadedState,
    applyMiddleware(...middlewares)
    );
    let persistor = persistStore(store)
  return {persistor, store}
}