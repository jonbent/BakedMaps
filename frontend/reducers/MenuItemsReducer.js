import {RECEIVE_MENU_ITEMS} from '../actions/menuItems';

export default (prevState = {}, action) => {
    Object.freeze(prevState);
    let nextState = {};
    switch(action.type){
        case RECEIVE_MENU_ITEMS:
            let menuItems = {};
            action.payload.data.menu_items.forEach(el => {
              menuItems[el.slug] = el;
            });
            // nextState = Object.assign({}, prevState, menuItems);
            nextState = menuItems;
            return nextState;
        default:
            return prevState;
    }
}