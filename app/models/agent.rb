class Agent < ApplicationRecord

  has_many :users
  has_many :destinations
  accepts_nested_attributes_for :users, :destinations

  serialize :preferences

  def total
    destination_total = 0
    self.destinations.each do |dest|
      destination_total = destination_total + dest.price
    end
    destination_total
  end

  def full_name
    "#{first_name} #{last_name}"
  end

end
