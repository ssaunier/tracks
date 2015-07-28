Rails.application.routes.draw do
  devise_for :users
  root 'lists#index'
  get 'upcoming', to: 'albums#upcoming', as: :upcoming
  resources :albums do
    member do
      get 'upvote', to: 'albums#upvote'
      get 'unvote', to: 'albums#unvote'
      get 'get', to: 'albums#get_album'
    end
  end
end
