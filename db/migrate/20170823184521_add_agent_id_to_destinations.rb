class AddAgentIdToDestinations < ActiveRecord::Migration[5.1]
  def change
    add_column :destinations, :agent_id, :integer
  end
end
