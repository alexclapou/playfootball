Rails.application.routes.draw do
  root 'pages#home'
  get 'dashboard', to: 'pages#dashboard'
  get 'search', to: 'pages#search'
  get 'profile', to: 'pages#profile'
end
