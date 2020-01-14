import * as ReviewApiUtil from '../util/ReviewApiUtil'

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";

const receiveReviews = (payload) => ({
    type: RECEIVE_REVIEWS,
    payload
})

export const fetchReviewsByBakeryId = (bakeryId) => dispatch => {
    return ReviewApiUtil.fetchReviewsByBakeryId(bakeryId).then(reviews => {console.log(reviews); dispatch(receiveReviews(reviews))})
}

export const postReview = (formReview) => dispatch => (
    ReviewApiUtil.postReview(formReview).then(review => receiveReview(review))
)