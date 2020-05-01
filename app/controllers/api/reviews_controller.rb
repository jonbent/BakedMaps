class Api::ReviewsController < ApplicationController
    def index
        if params[:reviewable_type] == "all"
            user = User.find(params[:reviewable_id])
            @reviews = user.reviews
            # @reviews = Review.includes(:user).where(reviewable_id: params[:reviewable_id], 
        else
            @reviews = Review.includes(:user).order(created_at: :desc).where(reviewable_id: params[:reviewable_id], reviewable_type: params[:reviewable_type])
        end
    end

    def show
        @review = Review.find(params[:id])
    end

    def create
        @review = Review.new(review_params)
        if @review.save
            render :show
        else
            render json: {review: nil, errors: @review.errors.messages}, status: 422
        end
    end

    def update

    end

    def destroy

    end

    private

    def review_params
        params.require(:review).permit(:title, :body, :rating, :user_id, :reviewable_id, :reviewable_type)
    end
end
