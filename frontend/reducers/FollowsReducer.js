import { RECEIVE_USER_AND_EXTRAS } from '../actions/users';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follows';

export default (prevState = {}, action) => {
    Object.freeze(prevState);

    let nextState = {};
    switch (action.type) {
        case RECEIVE_USER_AND_EXTRAS:
            nextState = Object.assign(nextState, prevState, action.payload.follows);
            return nextState;
        case RECEIVE_FOLLOW:
            nextState = Object.assign(nextState, prevState, action.payload.follow);
            return nextState;
        case REMOVE_FOLLOW:
            nextState = Object.assign(nextState, prevState)
            delete nextState[action.followId]
            return nextState
        default:
            return prevState;
    }
}