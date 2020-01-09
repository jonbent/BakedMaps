import { combineReducers } from "redux";

import UsersReducer from "./UsersReducer";
import BakeriesReducer from "./BakeriesReducer";

export default combineReducers({
  users: UsersReducer,
  bakeries: BakeriesReducer
});
