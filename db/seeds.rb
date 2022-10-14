# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


# account for local
User.create(email: 'alexclapou@gmail.com', password:'parola', password_confirmation: 'parola', first_name: 'Alexandru', last_name: 'Clapou', date_of_birth: '05-02-2000')
puts "user #{User.last.email} created".green