class Agent < ApplicationRecord

  def total
    destination_total = 0
    self.destinations.each do |dest|
      destination_total = destination_total + dest.price
    end
    destination_total
  end

  has_many :users
  has_many :destinations

  def full_name
    "#{first_name} #{last_name}"
  end

end
