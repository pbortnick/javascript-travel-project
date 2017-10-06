class AddAgentNameToDestinations < ActiveRecord::Migration[5.1]
  def change
    add_column :destinations, :agent_name, :string
  end
end
