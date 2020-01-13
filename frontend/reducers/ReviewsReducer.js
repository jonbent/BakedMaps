import { RECEIVE_REVIEWS } from "../actions/reviews";

export default (prevState = {}, action) => {
    Object.freeze(prevState);
    let nextState = {};
    switch (action.type) {
        case RECEIVE_REVIEWS:
        nextState = Object.assign(nextState, prevState, action.reviews);
        return nextState;
        default:
            return prevState
    }
}