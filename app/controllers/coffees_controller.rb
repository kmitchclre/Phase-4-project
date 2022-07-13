class CoffeesController < ApplicationController
    def index
        coffees = Coffee.all
        render json: coffees, status: :ok
    end
end
