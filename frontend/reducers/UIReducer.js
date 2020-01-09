import { combineReducers } from "redux";
import FiltersReducer from "./FiltersReducer";

export default combineReducers({
    filters: FiltersReducer
})