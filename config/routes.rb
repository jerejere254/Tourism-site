Rails.application.routes.draw do

  namespace :api do

    resources :books, only: [:index, :create, :destroy]
    resources :sites, only: [:index, :show]
    resources :tourists, only: [:index, :show, :create]
    resources :tourguides, only: [:index, :show, :create]

    # Tourist AUTH
    post "/tourist_login", to: "tourist_sessions#create"
    delete "/tourist_logout", to: "tourist_sessions#destroy"
    get "/tourist_auth", to: "tourists#show"
    post "/tourist_signup", to: "tourists#create"

    # Tourguide AUTH
    post "tourguides_login", to: "tourguides_sessions#create"
    delete "tourguides_logout", to: "tourguides_sessions#destroy"
    get "/tourguides_auth", to: "tourguides#show"
    post "/tourguides_signup", to: "tourguides#create"

    # tourguide sites
    get 'tourguides_sites', to: "tourguides_sites#index"
    get "tourguides_sites/:id", to: "tourguides_sites#show"
    patch "tourguides_sites/:id", to: "tourguides_sites#update"
    delete "tourguides_sites/:id", to: "tourguides_sites#destroy"
    post 'tourguides_sites', to: "tourguides_sites#create"


  end

get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  
end

