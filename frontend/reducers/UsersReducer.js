import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session";
import { RECEIVE_REVIEWS } from '../actions/reviews';
import { RECEIVE_USER } from '../actions/users';
import { RECEIVE_USER_AND_EXTRAS } from '../actions/users'
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follows';

export default (prevState = {}, action) => {
  Object.freeze(prevState);
  let nextState = {};
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState = Object.assign({}, prevState, {
        [action.payload.user.username]: action.payload.user
      });
      return nextState;
      case RECEIVE_REVIEWS:
        nextState = Object.assign({}, prevState, action.payload.users);
        return nextState
      case RECEIVE_USER: 
        nextState = Object.assign({}, prevState, {
          [action.payload.user.username]: action.payload.user
        });
      return nextState;
      case RECEIVE_USER_AND_EXTRAS:
        nextState = Object.assign({}, prevState, {
          [action.payload.user.username]: action.payload.user
        });
        return nextState;
      case RECEIVE_FOLLOW:
        nextState = Object.assign({}, prevState, {
          [action.payload.user.username]: action.payload.user
        });
        return nextState;
      case REMOVE_FOLLOW:
        nextState = Object.assign({}, prevState, {
          [action.payload.user.username]: action.payload.user
        });
        return nextState;
    default:
      return prevState;
  }
};
