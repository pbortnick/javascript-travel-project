class AgentSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :destinations
end
