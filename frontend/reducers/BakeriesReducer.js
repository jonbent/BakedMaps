import {RECEIVE_BAKERIES, RECEIVE_BAKERY} from '../actions/bakeries'

export default (prevState = {}, action) => {
    Object.freeze(prevState);
    let nextState;
    switch(action.type){
        case RECEIVE_BAKERIES:
            let listings = {}
            action.payload.data.listings.forEach(el => {
                listings[el.slug] = el;
            })
            // nextState = Object.assign({}, prevState, listings);
            return listings
        case RECEIVE_BAKERY:
            nextState = Object.assign({}, prevState, {[action.payload.data.listing.slug]: action.payload.data.listing});
            return nextState;
        default:
            return prevState;
    }
}