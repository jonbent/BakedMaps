class Api::UsersController < ApplicationController
  def show
    @extra_info =  params[:extra_info]
      if @extra_info
        @user = User.includes(:reviews).includes(:follows).find_by_username(params[:username])
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
      @user = User.find_by_username(params[:username])
      unless @user
          return render json: {user: nil, errors: {username: "User does not exist"}}
      end
      errors = {}
      if params[:user][:cur_password]
            unless @user.is_password?(params[:user][:cur_password])
                errors[:old_pass] = 'Old Password is not correct'
            end
            if @user.is_password?(params[:user][:password])
                errors[:password] = 'New Password cannot be the same as current password'
            end
      end

      unless (errors.empty?)
        return render json: {
          user: nil, errors: errors
        }, status: 422
      end

      if @user.update(user_params)
        redirect_to api_user_show_url(@user.username), status: 303, action: :show, extra_info: true
      else
        render json: {user: nil, errors: @user.errors.messages}, status: 422
      end

  end
  private

  def user_params
    params
      .require(:user)
      .permit(
        :username,
        :email,
        :password,
        :address,
        :birthday,
        :gender,
        :name
      )
  end
end