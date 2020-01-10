import { combineReducers } from "redux";
import FiltersReducer from "./FiltersReducer";
import CityReducer from './CityReducer'

export default combineReducers({
    filters: FiltersReducer,
    city: CityReducer
})