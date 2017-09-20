json.location @destination.location
json.price @destination.price
json.trip_length @destination.trip_length
json.weather @destination.weather

json.agent do
  json.name @destination.agent.name
end
