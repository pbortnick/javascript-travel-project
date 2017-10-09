class DestinationSerializer < ActiveModel::Serializer
  attributes :id, :location, :price, :weather, :trip_length, :agent_id
  belongs_to :agent

  # def self.serialize(destination)
  #   serialized_destination = '{'
  #   serialized_destination += '"id": ' + destination.id.to_s + ', '
  #   serialized_destination += '"location": "' + destination.location + '", '
  #   serialized_destination += '"price": "' + destination.price.to_s + '", '
  #   serialized_destination += '"weather": "' + destination.weather + '", '
  #   serialized_destination += '"trip_length": "' + destination.trip_length.to_s + '", '
  #   serialized_destination += '"agent_id": "' + destination.agent_id.to_s + '", '
  #   serialized_destination += '"agent": {'
  #   serialized_destination += '"id": "' +  destination.agent.id.to_s + '"}'
  #   serialized_destination += '}'
  # end

end
