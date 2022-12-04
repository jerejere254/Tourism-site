class Api::TourguideSiteController < ApplicationController
    before_action :authorize
    rescue_from ActiveRecord::RecordInvalid, with: :render_unproccessable_entity
    rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found


    def index
        sites = Site.where(tourguide_id: @tourguide.id)
        render json: sites
    end

    def show
        site = Site.find(params[:id])
        render json: site
    end

    def update
        site = Site.find(params[:id])
        site.update!(site_params)
        render json: site, status: 201
    end

    def destroy
        site = Site.find(params[:id])
        site.destroy
        render json: site
    end

    def create 
        site = @tourguide.sites.create!(site_params)
        render json: site
    end

    private 

    def site_params
        params.permit(:title, :description, :price, :image_url, :remaining)
    end

    def authorize
        @tourguide = Tourguide.find_by(id: session[:tourguide_id])
        render json: {errors: ["You can Only Manage Sites that belong to you"]}, status: 401 unless @tourguide
    end

    def render_unproccessable_entity(invalid)
        render  json: {errors: invalid.record.errors.full_messages}, status: 422
    end

     def render_record_not_found
        render json: {error: ["Site not found"]}, status: 404
    end

end