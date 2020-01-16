import * as ReviewApiUtil from '../util/ReviewApiUtil'

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";

const receiveReviews = (payload) => ({
    type: RECEIVE_REVIEWS,
    payload
})
const receiveReview = (payload) => ({
    type: RECEIVE_REVIEW,
    payload
})

const receiveReviewErrors = (payload) => ({
    type: RECEIVE_REVIEW_ERRORS,
    payload
})

export const fetchReviewsByBakeryId = (bakeryId) => dispatch => {
    return ReviewApiUtil.fetchReviewsByBakeryId(bakeryId).then(reviews => dispatch(receiveReviews(reviews)))
}
export const fetchUserReviews = (userId) => dispatch => {
    return ReviewApiUtil.fetchUserReviews(userId).then(reviews => dispatch(receiveReviews(reviews)))
}

export const postReview = (formReview) => dispatch => {
    return ReviewApiUtil.postReview(formReview).then(
        review => dispatch(receiveReview(review)), 
        payload => dispatch(receiveReviewErrors(payload.responseJSON))
    )
}