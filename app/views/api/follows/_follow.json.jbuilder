json.set! follow.id do 
    json.extract! follow, :id, :bakery_tag, :bakery_type, :user_id
    json.created_at time_ago_in_words(follow.created_at)
end