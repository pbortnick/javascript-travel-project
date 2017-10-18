class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_user!
  helper_method :most_expensive, :least_expensive
  before_action :set_least_expensive, only: [:home, :least_expensive]
  def after_sign_in_path_for(resource)
    request.env['omniauth.origin'] || root_path
  end

  def home
    @destinations = Destination.all
  end

  def trip
  end

  def most_expensive
    Destination.order('price DESC').first.location
  end

  def least_expensive
    return @destination.location
  end

  private

  def set_least_expensive
    @destination = Destination.order('price ASC').first
  end

end
