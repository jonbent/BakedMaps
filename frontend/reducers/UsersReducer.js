import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session";



export default (prevState = {}, action) => {
  Object.freeze(prevState);
  let nextState = {};
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState = Object.assign({}, prevState, {
        [action.payload.user.id]: action.payload.user
      });
      return nextState;
    default:
      return prevState;
  }
};
