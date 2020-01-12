import * as WMApiUtil from "../util/WMApiUtil";

export const RECEIVE_MENU_ITEMS = "RECEIVE_MENU_ITEMS";
export const RECEIVE_MENU_ITEM = "RECEIVE_MENU_ITEM";

export const receiveMenuItems = (payload) => ({
    type: RECEIVE_MENU_ITEMS,
    payload
})
export const receiveMenuItem = (payload) => ({
    type: RECEIVE_MENU_ITEM,
    payload
})

export const fetchMenuItems = (dispensarySlug, filter) => dispatch => {
  return WMApiUtil.fetchMenuItems(dispensarySlug , filter).then(res => {
    dispatch(receiveMenuItems(res));
  });
};
export const fetchMenuItem = menuItemSlug => dispatch => {
  return WMApiUtil.fetchMenuItem(menuItemSlug).then(res => {
    dispatch(receiveMenuItem(res));
  });
};