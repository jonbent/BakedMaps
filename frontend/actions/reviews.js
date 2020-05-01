import * as ReviewApiUtil from '../util/ReviewApiUtil'
import * as WMApiUtil from '../util/WMApiUtil';
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const RECEIVE_REVIEW_DISTRIBUTION = "RECEIVE_REVIEW_DISTRIBUTION";

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
});

export const receiveReviewDistribution = (distribution) => ({
    type: RECEIVE_REVIEW_DISTRIBUTION,
    distribution
});

export const fetchReviewableDistribution = (reviewableSlug, reviewableType) => dispatch => {
  return WMApiUtil.fetchReviewableDistribution(reviewableSlug, reviewableType).then(res => dispatch(receiveReviewDistribution(res.meta.distribution)));
};

export const fetchReviewsByBakeryId = (bakeryId, bakeryType) => dispatch => {
    return ReviewApiUtil.fetchReviewsByBakeryId(bakeryId, bakeryType).then(reviews => dispatch(receiveReviews(reviews)))
};
export const fetchUserReviews = (userId) => dispatch => {
    return ReviewApiUtil.fetchUserReviews(userId).then(reviews => dispatch(receiveReviews(reviews)))
};

export const postReview = (formReview) => dispatch => {
    return ReviewApiUtil.postReview(formReview).then(
        review => dispatch(receiveReview(review)), 
        payload => dispatch(receiveReviewErrors(payload.responseJSON))
    )
}