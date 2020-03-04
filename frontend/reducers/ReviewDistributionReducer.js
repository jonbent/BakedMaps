import {RECEIVE_REVIEW_DISTRIBUTION} from '../actions/reviews';

export default (prevState = {}, action) => {
    Object.freeze(prevState);
    switch(action.type){
        case RECEIVE_REVIEW_DISTRIBUTION:
            return action.distribution;
        default:
            return prevState;
    }

}