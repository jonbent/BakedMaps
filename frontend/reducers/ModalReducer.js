import {OPEN_MODAL, CLOSE_MODAL} from '../actions/modals'
export default (prevState = null, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return action.modalName;
        case CLOSE_MODAL:
            return null;
        default:
            return prevState;
    }
}