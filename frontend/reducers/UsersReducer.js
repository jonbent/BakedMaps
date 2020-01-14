import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session";
import { RECEIVE_REVIEWS } from '../actions/reviews';


export default (prevState = {}, action) => {
  Object.freeze(prevState);
  let nextState = {};
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState = Object.assign({}, prevState, {
        [action.payload.user.id]: action.payload.user
      });
      return nextState;
    case RECEIVE_REVIEWS:
      nextState = Object.assign({}, prevState, action.payload.users);
      return nextState
    default:
      return prevState;
  }
};
