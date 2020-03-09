import {RECEIVE_CITY} from '../actions/cities';
import {isEmpty} from 'lodash';
import {CLEAR_CITY} from '../bakedMaps';
const _nullState = {
    name: "San Francisco",
    state_id: "CA",
    state_name: "California",
    lat: 37.7562,
    lng: -122.443,
    timezone: "America/Los_Angeles",
    id: 1840021543,
};
export default (prevState = _nullState, action) => {
    Object.freeze(prevState);
    let nextState;
    switch(action.type){
        case RECEIVE_CITY:
            nextState = action.city;
            return nextState;
        case "persist/REHYDRATE":
            if (!action.payload) return _nullState;
            if (Object.entries(action.payload.ui.city).length === 0) return _nullState;
            return action.payload.ui.city;
        case CLEAR_CITY:
            return {};
        default:

            return prevState;
    }
}