class ReviewsController < ApplicationController

    def index
        reviews = Review.all
        render json: reviews, status: :ok
    end

    def show
        review = Review.find(params[:id])
        render json: review, status: :ok
    end

    def update
        review = Review.find(params[:id])
        render json: review.update!(review_params), status: :created
    end
    
    def create
        review = Review.create!(review_params)
        render json: review, status: :created
    end

    def destroy
        review = Review.find(params[:id])
        review.destroy
        head :no_content
    end

    private

    def review_params
        params.permit(:text, :user_id, :coffee_id)
    end
end
