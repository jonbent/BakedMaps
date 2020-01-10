import {RECEIVE_CITY} from '../actions/cities'

export default (prevState = {}, action) => {
    Object.freeze(prevState);
    let nextState;
    switch(action.type){
        case RECEIVE_CITY:
            nextState = action.city;
            return nextState;
        default: 
            return prevState;
    }
}