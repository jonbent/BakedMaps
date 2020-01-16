export const fetchReviewsByBakeryId = (bakeryId) => (
    $.ajax({
        url: `/api/reviews/bakeries/${bakeryId}/`,
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

export const postReview = (review, type="bakeries") => (
    $.ajax({
        url: `/api/reviews`,
        method: "POST",
        data: {review},
        contentType: 'application/JSON'
    })
)