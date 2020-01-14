import { combineReducers } from "redux";
import FiltersReducer from "./FiltersReducer";
import CityReducer from './CityReducer'
import MenuItemSizeReducer from './MenuItemSizeReducer'
import ModalReducer from './ModalReducer'

export default combineReducers({
    filters: FiltersReducer,
    city: CityReducer,
    menuItemSize: MenuItemSizeReducer,
    modal: ModalReducer
})