class Api::TourguideSessionsController < ApplicationController

    def create
        tourguide = Tourguide.find_by(username: params[:username])
        if session[:tourist_id]
            render json: {errors: ["Please Log Out from Tourist Account before Logging in as a Tourguide"]}, status: 401
        elsif tourguide&.authenticate(params[:password])
            session[:tourguide_id] = tourguide.id
            render json: tourguide
        else
            render json: {errors: ["Invalid Username or Password"]}, status: 401
        end
    end

    def destroy
        if session[:tourguide_id]
            session.delete :tourguide_id
            head 204
        else
            render json: {errors: ["Not Authorized"]}, status: 401
        end
    end
end