Rails.application.routes.draw do
  root 'pages#index'
  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  # devise_scope :user do
    # get '/api/login', to: 'devise/sessions#new'
  # end

  namespace 'api', { format: "json" } do
    resources :documents
  end
  match '*path', via: :get, to: 'pages#index', constraints: lambda { |req| req.format == :html } 
end
