class Api::ReviewsController < ApplicationController
    def index
        @reviews = Review.includes(:user).where(reviewable_id: params[:reviewable_id], reviewable_type: params[:reviewable_type])
    end

    def show
        @review = Review.find(params[:id])
    end

    def create
        @review = Review.new(review_params)
        @review.reviewable_id = params[:reviewable_id]
        @review.reviewable_type = params[:reviewable_type]
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
        params.require(:review).permit(:title, :body, :rating, :user_id)
    end
end
