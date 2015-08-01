Rails.application.routes.draw do
  devise_for :users
  root 'lists#index'
  get 'upcoming', to: 'albums#upcoming', as: :upcoming
  resources :albums do
    member do
      post :upvote
    end
  end
end
