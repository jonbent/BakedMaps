class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email_or_username], params[:user][:password])
        if @user
            login(@user)
            render '/api/users/show'
        else
            render json: {user: nil, errors: ["Invalid username or password"]}, status: 401
        end
    end

    def destroy
        if current_user
            logout()
            render json: {}
        else
            render json: {errors: ["Current User Not Found"]}, status: 404
        end
    end
end