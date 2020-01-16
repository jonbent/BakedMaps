Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace 'api', defaults: {format: :json} do 
    resources :users, only: :create
    get '/users/:username', to: 'users#show'
    resource :session, only: [:create, :destroy]
    get '/reviews/:reviewable_type/:reviewable_id', to: 'reviews#index'
    resources :reviews, only: :create 
    resources :follows, only: [:create, :destroy]
  end
  root to: "static_pages#root"
end
