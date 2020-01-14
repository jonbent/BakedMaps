import { RECEIVE_REVIEWS, RECEIVE_REVIEW } from "../actions/reviews";

export default (prevState = {}, action) => {
    Object.freeze(prevState);
    let nextState = {};
    switch (action.type) {
        case RECEIVE_REVIEWS:
            nextState = Object.assign(nextState, prevState, action.payload.reviews);
            return nextState;
        case RECEIVE_REVIEW:
            nextState = Object.assign(nextState, prevState, action.review)
        default:
            return prevState
    }
}