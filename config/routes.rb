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

  get '/agents/destinations/new' => "agents#new"

  # get '/agents/:id/agent_data', to: 'agents#agent_data'

  get '/destinations/:id/destination_data', to: 'destinations#destination_data'

end
