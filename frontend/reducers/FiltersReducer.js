import { UPDATE_BOUNDS } from '../actions/filters'

export default (prevState = {}, action) => {
    Object.freeze(prevState);
    
    let nextState = {};
    switch(action.type){
        case UPDATE_BOUNDS:
            nextState = Object.assign({}, prevState, {bounds: action.bounds})
            return nextState;
        default: 
            return prevState;
    }
}