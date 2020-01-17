import { UPDATE_BOUNDS, RECEIVE_REVIEW_AMOUNT, RECEIVE_REVIEW_TYPE, RECEIVE_SEARCH_PRODUCTS } from '../actions/filters';

export default (prevState = {}, action) => {
    Object.freeze(prevState);
    
    let nextState = {};
    switch(action.type){
        case UPDATE_BOUNDS:
            nextState = Object.assign({}, prevState, {bounds: action.bounds});
            return nextState;
        case RECEIVE_REVIEW_AMOUNT: 
            nextState = Object.assign({}, prevState, { reviewAmount: action.payload.reviewAmount, reviewableType: action.payload.reviewableType, reviewableId: action.payload.reviewableId });
            return nextState;
        case RECEIVE_SEARCH_PRODUCTS: 
            nextState = Object.assign({}, prevState, { products: action.payload.data.results });
            return nextState;
        default: 
            return prevState;
    }
}