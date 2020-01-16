class Api::UsersController < ApplicationController
    def show
        @extra_info =  params[:extra_info]
        if @extra_info
            @user = User.includes(:reviews).includes(:follows).find_by_username(params[:username])
            p "LOGGING"
            p @user.follows
        else
            @user = User.find_by_username(params[:username])
        end
        render :show
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render :create
        else
            render json: {user: nil, errors: @user.errors.messages}, status: 422
        end
    end

    def update

    end
    
    private 

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end