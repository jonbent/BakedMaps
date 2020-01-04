import {combineReducers} from 'redux';

import SessionReducer from './SessionReducer'
import ErrorsReducer from './ErrorsReducer'
import EntitiesReducer from './EntitiesReducer'

export default combineReducers({
  session: SessionReducer,
  entities: EntitiesReducer,
  errors: ErrorsReducer
});