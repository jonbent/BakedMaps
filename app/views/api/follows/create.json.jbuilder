json.follow do
    json.partial! 'follow', follow: @follow
end

json.user do
    json.partial! 'api/users/user', user: @user
end