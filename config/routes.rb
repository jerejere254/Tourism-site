Rails.application.routes.draw do

  namespace :api do

    resources :books, only: [:index, :create, :destroy]
    resources :sites, only: [:index, :show]
    resources :tourists, only: [:index, :show, :create, :destroy]
    resources :tourguides, only: [:index, :show, :create]

    # Tourist AUTH
    post "tourist_login", to: "tourist_sessions#create"
    delete "tourist_logout", to: "tourist_sessions#destroy"
    get "tourists_auth", to: "tourists#show"
    post "tourists_signup", to: "tourists#create"

    # Tourguide AUTH
    post "tourguide_login", to: "tourguide_sessions#create"
    delete "tourguide_logout", to: "tourguide_sessions#destroy"
    get "tourguide_auth", to: "tourguides#show"
    post "tourguide_signup", to: "tourguides#create"

    # tourguide sites
    get 'tourguide_sites', to: "tourguide_sites#index"
    get "tourguide_sites/:id", to: "tourguide_sites#show"
    patch "tourguide_sites/:id", to: "tourguide_sites#update"
    delete "tourguide_sites/:id", to: "tourguide_sites#destroy"
    post 'tourguide_sites', to: "tourguide_sites#create"


  end

get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  
end

