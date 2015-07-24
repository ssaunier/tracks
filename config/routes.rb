Rails.application.routes.draw do
  devise_for :users
  root 'albums#index'
  resources :albums do
    member do
      get 'upvote', to: 'albums#upvote'
      get 'unvote', to: 'albums#unvote'
    end
  end
end
