export const fetchReviewsByBakeryId = (bakeryId) => (
    $.ajax({
        url: `/api/reviews/bakeries/${bakeryId}/`,
        method: "GET",
        dataType: "JSON"
    })
)

export const postReview = (post, type="bakeries") => (
    $.ajax({
        url: `/api/reviews/bakeries`,
        method: "POST",
        data: {post}
    })
)