class Api::FollowsController < ApplicationController
    def create
        @follow = Follow.new(follow_params)
        if @follow.save
            @user = User.find(follow_params[:user_id])
            render :create
        else
            render json: {errors: @follow.errors.messages}, status: 422
        end
    end

    def destroy
        @follow = Follow.find(params[:id])
        if @follow
            @user = @follow.user
            @follow.destroy
            render :destroy
        else
            render json: {errors: ["Failed To Find Follow with given Id."]}
        end
    end

    private

    def follow_params
        params.require(:follow).permit(:user_id, :bakery_tag, :bakery_type)
    end
end