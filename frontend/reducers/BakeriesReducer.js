import {RECEIVE_BAKERIES} from '../actions/bakeries'

export default (prevState = {}, action) => {
    Object.freeze(prevState);
    let nextState;
    switch(action.type){
        case RECEIVE_BAKERIES:
            let listings = {}
            action.payload.data.listings.forEach(el => {
                listings[el.id] = el;
            })
            nextState = Object.assign({}, prevState, listings);
            return nextState;
        default:
            return prevState;
    }
}