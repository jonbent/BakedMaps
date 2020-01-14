json.extract! user, :id, :username
if user.image.attached?
    json.avatar_url url_for(user.image)
else
    json.avatar_url asset_path('image_missing')
end