class Api::TouristsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessible_entity

    def index
        render json: Tourist.all
    end

    def show
        tourist=Tourist.find_by(id: session[:tourist_id])
        if tourist
            render json: tourist
        else
            render json: {error: "unauthorized"}, status: 401
        end
    end

    def create
        if session[:tourguide_id] 
            render json: {errors: ["Please Log Out tourguides Account before Creating a tourist Account"]}, status: 401
        else
            tourist = Tourist.create!(tourist_params)
            session[:tourist_id] = tourist.id
            render json: tourist, status: 201
        end
        
    end

    private

    def tourist_params
        params.permit(:username, :password, :password_confirmation, :user_type)
    end

    def render_unprocessible_entity(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: 422
    end
end