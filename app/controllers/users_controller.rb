class UsersController < ApplicationController

    def create
        user = User.create!(user_params)
        sessin[:user_id] = user.id
        render json: user, status: :created
    end

    def user_params
        params.permit(:username, :password)
    end
end
