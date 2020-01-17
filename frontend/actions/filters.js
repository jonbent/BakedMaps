import * as WMApiUtil from '../util/WMApiUtil'

export const UPDATE_BOUNDS = "UPDATE_BOUNDS";
export const RECEIVE_REVIEW_AMOUNT = "RECEIVE_REVIEW_AMOUNT";
export const RECEIVE_SEARCH_PRODUCTS = "RECEIVE_SEARCH_PRODUCTS";



export const updateBounds = bounds => ({
  type: UPDATE_BOUNDS,
  bounds
});
export const receiveReviewAmount = payload => ({
  type: RECEIVE_REVIEW_AMOUNT,
  payload
});
export const receiveSearchProducts = payload => ({
  type: RECEIVE_SEARCH_PRODUCTS,
  payload
});

export const fetchSearchResults = (query, city) => dispatch => {
  return WMApiUtil.fetchSearchResults(query, city).then((payload) => dispatch(receiveSearchProducts(payload)))
}