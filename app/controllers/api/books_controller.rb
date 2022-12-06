class Api::BooksController < ApplicationController
    before_action :authorize
    rescue_from ActiveRecord::RecordInvalid, with: :render_unproccessable_entity
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    
    def index
       
        books = Book.where(tourist_id: @tourist.id)
        render json: books
    end

    def create
        # binding.pry
        book = Book.create!(site_id: params[:site_id], tourist_id: @tourist.id)
    end

    def destroy
        book = Book.find(params[:id])
        book.destroy
        render json: book
    end

    private

    def authorize
        @tourist = Tourist.find_by(id: session[:tourist_id])
        render json: {errors: ["Please Log in or Create a tourist account to manage your cart"]}, status: 401 unless @tourist  
    end

    def book_param
        params.permit(:site_id)
    end

    def render_unproccessable_entity(invalid)
        render  json: {errors: invalid.record.errors.full_messages}, status: 422
     end

     def render_not_found_response
        render json: {errors: "Record Not Found"}
     end

end