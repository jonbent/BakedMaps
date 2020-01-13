export const fetchReviewsByBakeryId = (bakeryId) => (
    $.ajax({
        url: `/api/reviews/bakeries/${bakeryId}/`,
        method: "GET",
        dataType: "JSON"
    })
)