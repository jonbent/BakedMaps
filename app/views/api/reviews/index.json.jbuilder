json.reviews do 
    @reviews.each do |review|
        json.partial! 'review', review: review
    end
end

json.users do 
    @reviews.each do |review|
        json.set! review.user_id do 
            json.partial! 'user', user: review.user
        end
    end
end