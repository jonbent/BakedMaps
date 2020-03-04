import {RECEIVE_USER_ERRORS} from "../actions/users";
import {CLOSE_MODAL} from "../actions/modals";

export default (prevState = {}, action) => {
    Object.freeze(prevState);

    switch (action.type) {
        case RECEIVE_USER_ERRORS:
            return action.errors;
        case CLOSE_MODAL:
            return {};
        default:
            return prevState;

    }
}