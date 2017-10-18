Rails.application.routes.draw do

  devise_for :users, :controllers => { :omniauth_callbacks => "callbacks" }
  get '/auth/github', to: redirect('/users/auth/github')

  resources :agents do
    resources :destinations
  end

  resources :destinations
  resources :users

  root "application#home"
  get '/least_expensive' => "application#least_expensive"
  get '/trip' => "application#trip"

  get '/agents/destinations/new' => "agents#new"

  get '/agents/destinations/:id' => "destinations#show"
  # get '/agents/:id/agent_data', to: 'agents#agent_data'

  get '/destinations/:id/destination_data', to: 'destinations#destination_data'

end
