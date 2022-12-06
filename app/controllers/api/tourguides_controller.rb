class Api::TourguidesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessible_entity

    def index
        render json: Tourguide.all
    end

    def show
        tourguide = Tourguide.find_by(id: session[:tourguide_id])
        if tourguide
            render json: tourguide
        else
            render json: {error: "unauthorized"}, status: 401
        end
    end

    def create
        if session[:tourist_id]
            render json: {errors: ["Please Log Out from Tourists Account before creating a Tourguide Account"]}, status: 401
        else
            tourguide = Tourguide.create!(vendor_params)
            session[:tourguide_id] = tourguide.id
            render json: tourguide, status: 201
        end
    end

    private

    def tourguide_params
        params.permit(:username, :password, :password_confirmation, :user_type)
    end

    def render_unprocessible_entity(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: 422
    end
end