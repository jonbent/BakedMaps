import { combineReducers } from "redux";
import FiltersReducer from "./FiltersReducer";
import CityReducer from './CityReducer'
import MenuItemSizeReducer from './MenuItemSizeReducer'

export default combineReducers({
    filters: FiltersReducer,
    city: CityReducer,
    menuItemSize: MenuItemSizeReducer
})