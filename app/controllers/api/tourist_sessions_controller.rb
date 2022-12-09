class Api::TouristSessionsController < ApplicationController
    
    def create
        tourist = Tourist.find_by(username: params[:username])
        if session[:tourguide_id] 
            render json: {errors: ["Please Log Out from tourguide Account before Logging in as tourist"]}, status: 401
        elsif tourist&.authenticate(params[:password])
            session[:tourists_id] = tourist.id
            render json: tourist
        else
            render json: {errors: ["Invalid Username or Password"]}, status: 401
        end
    end

    def destroy
        if session[:tourists_id]
            session.delete :tourists_id
            head 204
        else
            render json: {errors: ["Not Authorized"]}, status: 401
        end
    end
end