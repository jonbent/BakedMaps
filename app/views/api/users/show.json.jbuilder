json.user do 
    json.partial! 'user', user: current_user
end