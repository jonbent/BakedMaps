export const fetchReviewsByBakeryId = (bakeryId, bakeryType = 'bakeries') => (
    $.ajax({
        url: `/api/reviews/${bakeryType}/${bakeryId}/`,
        method: "GET",
        dataType: "JSON"
    })
)

export const fetchUserReviews = (userId) => (
    $.ajax({
        url: `/api/reviews/all/${userId}`,
        method: "GET"
    })
)

export const postReview = (review) => (
    $.ajax({
        url: `/api/reviews`,
        method: "POST",
        data: {review},
        contentType: 'application/JSON'
    })
)