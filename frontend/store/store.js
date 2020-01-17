import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';
import RootReducer from '../reducers/RootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['ui']
}
const persistedReducer = persistReducer(persistConfig, RootReducer)

export default (preloadedState = {}) =>{
  let store = createStore(
    persistedReducer,
    preloadedState,
    applyMiddleware(ReduxThunk, ReduxLogger)
    );
    let persistor = persistStore(store)
  return {persistor, store}
}