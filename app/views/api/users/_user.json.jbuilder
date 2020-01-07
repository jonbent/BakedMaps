json.extract! user, :id, :username, :email
json.avatar_url url_for(user.image)