Rails.application.routes.draw do
  scope "(:locale)", locale: /#{I18n.available_locales.join("|")}/ do
    devise_for :users

    root 'pages#home'
    get 'dashboard', to: 'pages#dashboard'
    get 'search', to: 'pages#search'
    # get 'profile', to: 'pages#profile'

    get 'profile', to: 'users#show', as: :profile
    resources :users, only: %i[show]
  end
end
