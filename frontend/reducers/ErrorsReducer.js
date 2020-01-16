import { combineReducers } from "redux";
import SessionErrorsReducer from './SessionErrorsReducer'
import ReviewErrorsReducer from './ReviewErrorsReducer'

export default combineReducers({
  session: SessionErrorsReducer,
  reviews: ReviewErrorsReducer
});
