# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

agent1 = Agent.create(first_name: 'Pam', last_name: 'Bortnick')

agent2 = Agent.create(first_name: 'Jason', last_name: 'Smith')


destination1 = Destination.create(location: 'New York City', price: 1000, trip_length: 5, weather: 'varies', agent_id: 1)

destination2 = Destination.create(location: 'California', price: 1500, trip_length: 10, weather: 'warm', agent_id: 4)
