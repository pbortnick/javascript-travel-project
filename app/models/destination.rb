class Destination < ApplicationRecord

  belongs_to :agent
  has_many :users, through: :agent

  # validates :location, :price, :trip_length, :weather, presence: true

end
