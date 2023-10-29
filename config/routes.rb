Rails.application.routes.draw do
  root to: 'sessions#welcome'

  resources :users
    get 'login', to: 'sessions#new'
    post 'login', to: 'sessions#create'
    delete 'logout', to: 'sessions#destroy'
    get 'logout', to: 'sessions#destroy'

  resources :products
    get 'products', to: 'products#index'
    get 'buy', to: 'products#buy'

  resources :carts do
    post 'add_to_cart', on: :member
  end
end
