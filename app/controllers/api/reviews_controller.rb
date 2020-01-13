class Api::ReviewsController < ApplicationController
    def index
        @reviews = Review.where(reviewable_id: params[:reviewable_id], reviewable_type: params[:reviewable_type])
    end

    def show
        @review = Review.find(params[:id])
    end

    def create

    end

    def update

    end

    def destroy

    end
end
