class Api::ProductsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found


    def index
        render json: Site.all
    end

    def show
        site = Site.find(params[:id])
        render json: site, serializer:  SiteAndTourguideSerializer
    end

    def render_record_not_found
        render json: {error: "Site not found"}, status: 404
    end
end