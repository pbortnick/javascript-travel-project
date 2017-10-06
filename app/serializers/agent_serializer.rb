class AgentSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name
  has_many :destinations

  # def self.serialize(agent)
  #   agent.destinations.each do |destination|
  #     serialized_agent = '{'
  #     serialized_agent += '"id": ' + agent.id.to_s + ', '
  #     serialized_agent += '"first_name": "' + agent.first_name + '", '
  #     serialized_agent += '"last_name": "' + agent.last_name + '", '
  #     serialized_agent += '"destinations": {'
  #     serialized_agent += '"location": "' +  destination.location + '"}'
  #     serialized_agent += '}'
  #   end
  # end
end
