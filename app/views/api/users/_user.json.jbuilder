json.extract! user, :id, :username, :email
if user.image.attached?
    json.avatar_url url_for(user.image)
end