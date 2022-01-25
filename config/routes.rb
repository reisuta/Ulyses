Rails.application.routes.draw do
  # root 'api/documents#index', format: "json"
  # namespace 'api', { format: "json" } do
    # resources :documents
  # end
  root 'pages#index'
  namespace 'api', { format: "json" } do
    resources :documents
  end
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
