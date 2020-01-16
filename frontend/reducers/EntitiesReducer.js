import { combineReducers } from "redux";

import UsersReducer from "./UsersReducer";
import BakeriesReducer from "./BakeriesReducer";
import MenuItemsReducer from "./MenuItemsReducer";
import ReviewsReducer from "./ReviewsReducer";
import FollowsReducer from "./FollowsReducer";

export default combineReducers({
  users: UsersReducer,
  bakeries: BakeriesReducer,
  menuItems: MenuItemsReducer,
  reviews: ReviewsReducer,
  follows: FollowsReducer
});
