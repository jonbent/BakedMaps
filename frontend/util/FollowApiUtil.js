export const postFollow = (follow) => (
    $.ajax({
        method: 'POST',
        url: `/api/follows`,
        data: {follow},
        contentType: 'application/JSON'
    })
)

export const deleteFollow = (followId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/follows/${followId}`
    })
)