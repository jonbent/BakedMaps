import { combineReducers } from "redux";
import SessionErrorsReducer from './SessionErrorsReducer'

export default combineReducers({
  session: SessionErrorsReducer,
});
