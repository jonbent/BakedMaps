import { RECEIVE_MENU_ITEMS } from "../actions/menuItems"

export default (prevState = 0, action) => {
    switch (action.type) {
        case RECEIVE_MENU_ITEMS:
            return action.payload.meta.total_menu_items
        default:
            return prevState;
    }
}