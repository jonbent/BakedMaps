import { combineReducers } from "redux";
import SessionErrorsReducer from './SessionErrorsReducer'
import ReviewErrorsReducer from './ReviewErrorsReducer'
import UserErrorsReducer from './UserErrorsReducer'

export default combineReducers({
  session: SessionErrorsReducer,
  reviews: ReviewErrorsReducer,
  user: UserErrorsReducer
});
