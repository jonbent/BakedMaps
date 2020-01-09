import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from "../actions/session";
import {CLEAR_ERRORS} from '../actions/errors'
export default (prevState = [], action) => {
    // Object.freeze(prevState);
    // let nextState = [];
    switch (action.type) {
      case RECEIVE_ERRORS:
        return action.payload.errors;
      case RECEIVE_CURRENT_USER:
        return [];
      case CLEAR_ERRORS:
        return [];
      default:
        return prevState;
    }
}