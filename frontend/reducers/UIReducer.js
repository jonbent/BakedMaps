import { combineReducers } from "redux";
import FiltersReducer from "./FiltersReducer";
import CityReducer from './CityReducer';
import MenuItemSizeReducer from './MenuItemSizeReducer';
import ModalReducer from './ModalReducer';
import hamburger from './HamburgerReducer';
import ReviewDistributionReducer from './ReviewDistributionReducer';

export default combineReducers({
    filters: FiltersReducer,
    city: CityReducer,
    menuItemSize: MenuItemSizeReducer,
    reviewDistribution: ReviewDistributionReducer,
    modal: ModalReducer,
    hamburger
})