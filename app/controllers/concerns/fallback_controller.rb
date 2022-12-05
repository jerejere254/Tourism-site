class FallbackController < ActionController::Base

  def index
    # React app index page
    render file: 'index.html'
  end
end