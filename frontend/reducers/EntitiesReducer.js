import { combineReducers } from "redux";

import UsersReducer from "./UsersReducer";
import BakeriesReducer from "./BakeriesReducer";
import MenuItemsReducer from "./MenuItemsReducer";

export default combineReducers({
  users: UsersReducer,
  bakeries: BakeriesReducer,
  menuItems: MenuItemsReducer
});
