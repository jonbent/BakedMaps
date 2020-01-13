import * as ReviewApiUtil from '../util/ReviewApiUtil'

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";

const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
})

export const fetchReviewsByBakeryId = (bakeryId) => dispatch => {
    return ReviewApiUtil.fetchReviewsByBakeryId(bakeryId).then(reviews => dispatch(receiveReviews(reviews)))
}