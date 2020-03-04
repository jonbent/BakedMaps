json.extract! user, :id, :username, :email
json.review_ids user.reviews.ids
json.follow_ids user.follows.ids
if user.image.attached?
    json.avatar_url url_for(user.image)
else
    json.avatar_url asset_path('image_missing.png')
end