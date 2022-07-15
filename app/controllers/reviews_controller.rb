class ReviewsController < ApplicationController

    def index
        reviews = []
        if params[:coffee_id] && params[:coffee_id] =~ /\A[-+]?[0-9]*\.?[0-9]+\Z/ 
            coffee = Coffee.find(params[:coffee_id])
            if coffee 
              reviews = coffee.reviews
            else
                render json: {message: "not found"}, status: 404
            end
        else
            reviews = Review.all
        end
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
