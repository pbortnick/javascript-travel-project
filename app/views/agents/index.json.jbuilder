json.array!(@agents) do |agent|
  json.extract! agent, :id, :first_name, :last_name
  json.url agent_url(agent, format: :json)
end
