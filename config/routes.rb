Rails.application.routes.draw do
  scope "(:locale)", locale: /#{I18n.available_locales.join("|")}/ do
    devise_for :users

    root 'pages#home'
    get 'dashboard', to: 'pages#dashboard'
    get 'search', to: 'pages#search'

    # profile page
    get 'profile', to: 'profile#show'
    get 'settings', to: 'profile#settings'
    get 'language-and-theme', to: 'profile#language_and_display'

    # change display theme
    get '/display:theme', to: 'application#display', as: 'theme'
  end

end
