json.user do
    json.name @user.name
    json.email @user.email
    json.address @user.address
    json.birthday @user.birthday
    json.gender @user.gender
    json.partial! 'api/users/user', user: @user
end
if @extra_info
    if @user.follows.length != 0
        json.follows do 
            @user.follows.each do |follow|
                json.partial! 'api/follows/follow', follow: follow
            end
        end
    else
        json.follows({})
    end
    if @user.reviews.length != 0
        json.reviews do 
            @user.reviews.each do |review|
                json.partial! 'api/reviews/review', review: review
            end
        end
    else
       json.reviews({})
    end
end