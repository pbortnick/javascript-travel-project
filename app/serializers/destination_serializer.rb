class DestinationSerializer < ActiveModel::Serializer
  attributes :id, :location, :price, :weather, :trip_length, :agent_id
  belongs_to :agent
end
