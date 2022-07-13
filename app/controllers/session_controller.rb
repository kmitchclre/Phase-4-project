class SessionController < ApplicationController
    def create
        byebug
        # user = User.find_by(username: params[:username])
        # session[:user_id] = user.id
        # render json: user
    end
end
