export const fetchUserInfo = (username, extraInfo = false) => {
    let url = `/api/users/${username}`;
    if (extraInfo) url = `/api/users/${username}/?extra_info=true`;
    return $.ajax({
        url: url,
        method: "GET",
        dataType: "JSON"
    })
}