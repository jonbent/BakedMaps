import {OPEN_MODAL, CLOSE_MODAL} from '../actions/modals'
import { RECEIVE_REVIEW_AMOUNT } from '../actions/filters'
import { RECEIVE_REVIEW } from '../actions/reviews'
export default (prevState = null, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return action.modalName;
        case CLOSE_MODAL:
            return null;
        case RECEIVE_REVIEW_AMOUNT:
            return 'review'
        case RECEIVE_REVIEW:
            return null
        default:
            return prevState;
    }
}