Rails.application.routes.draw do

  devise_for :users, :controllers => { :omniauth_callbacks => "callbacks" }
  get '/auth/github', to: redirect('/users/auth/github')

  resources :agents do
    resources :destinations #, only: [:index, :show, :new]
  end

  resources :destinations
  resources :users

  root "application#home"

  get '/trip' => "application#trip"

end
