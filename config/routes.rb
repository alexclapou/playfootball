Rails.application.routes.draw do
  scope "(:locale)", locale: /#{I18n.available_locales.join("|")}/ do
    devise_for :users, controllers: {
      sessions: 'users/sessions',
    }, skip: :omniauth_callbacks 

    root 'pages#home'
    get 'dashboard', to: 'pages#dashboard'
    get 'search', to: 'pages#search'

    # profile page
    get 'profile', to: 'profile#show'

    # user settings page
    namespace :settings do
      resources :public, only: %i[index update]
      resources :activity, only: %i[index update]
      resources :password_and_authentication, only: %i[index update], path: 'password-and-authentication'
      resources :billing_and_payments, only: %i[index update], path: 'billing-and-payments'
    end

    # language and themes page
    get 'language-and-theme', to: 'language_and_themes#show'
    get '/display:theme', to: 'language_and_themes#display', as: 'theme'
  end

  # omniauth
  devise_for :users, only: :omniauth_callbacks, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
end
