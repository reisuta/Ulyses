Rails.application.routes.draw do
  root 'pages#index'
  # devise_scope :user do
    # get '/api/login', to: 'devise/sessions#new'
  # end

  namespace 'api', { format: "json" } do
    resources :documents
  end
  # devise_for :users, controllers: {
  #       sessions: 'users/sessions'
  #     }
end
