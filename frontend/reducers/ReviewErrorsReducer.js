import { RECEIVE_REVIEW_ERRORS } from "../actions/reviews";
import { CLEAR_ERRORS } from '../actions/errors'
import { CLOSE_MODAL } from '../actions/modals'
export default (prevState = {}, action) => {
    // Object.freeze(prevState);
    // let nextState = [];
    switch (action.type) {
        case RECEIVE_REVIEW_ERRORS:
            return action.payload.errors;
        case CLEAR_ERRORS:
            return {};
        case CLOSE_MODAL:
            return {};
        default:
            return prevState;
    }
}