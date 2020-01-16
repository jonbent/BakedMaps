export const UPDATE_BOUNDS = "UPDATE_BOUNDS";
export const RECEIVE_REVIEW_AMOUNT = "RECEIVE_REVIEW_AMOUNT";

export const updateBounds = bounds => ({
  type: UPDATE_BOUNDS,
  bounds
});
export const receiveReviewAmount = payload => ({
  type: RECEIVE_REVIEW_AMOUNT,
  payload
});
