import { RECEIVE_REVIEWS, RECEIVE_REVIEW } from "../actions/reviews";
import { RECEIVE_USER_AND_EXTRAS } from '../actions/users'

export default (prevState = {}, action) => {
    Object.freeze(prevState);
    let nextState = {};
    switch (action.type) {
        case RECEIVE_REVIEWS:
            nextState = Object.assign(nextState, prevState, action.payload.reviews);
            return nextState;
        case RECEIVE_REVIEW:
            nextState = Object.assign(nextState, prevState, action.payload.review);
            return nextState;
        case RECEIVE_USER_AND_EXTRAS:
            nextState = Object.assign(nextState, prevState, action.payload.reviews);
            return nextState;
        default:
            return prevState
    }
}