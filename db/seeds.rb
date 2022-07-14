# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# puts "☕ Seeding users..."
user1 = User.create(username: "Kenny2g", password: "8209")
user2 = User.create(username: "Tyler", password: "1234")


puts "☕ Seeding coffees..."
coffee1 = Coffee.create(name: "Fremont", description: "A medium roast of seasonal flavors with a nutty flavor profile.", img_url: "https://bottomless.imgix.net/Ladro_02.png?auto=compress&w=300", roast: "Medium")
    
coffee2 = Coffee.create(name: "De La Paz", description: "Light tasting blend with Strawberry, Honey, and Rose tasting notes", img_url: "https://bottomless.imgix.net/fourbarrel-delapaz.png?auto=compress&w=300", roast: "Light")
    
coffee3 = Coffee.create(name: "Portland Organic French", description: "Rich, robust, with a very sweet aftertaste.", img_url: "https://bottomless.imgix.net/Portland_FrenchOrganic.png?auto=compress&w=300", roast: "French Roast")

coffee4 = Coffee.create(name: "Caffe Luna", description: "Robust aromas of bittersweet chocolate complimented by flavors of vanilla nd maple", img_url: "https://bottomless.imgix.net/Vita_03.png?auto=compress&w=300", roast: "Dark Roast")

coffee5 = Coffee.create(name: "Adamns Avenue", description: "Roasted to bring out notes of cardamon, toasted coconut, and molasses that this blind exudes", img_url: "https://bottomless.imgix.net/westbean-adamsave.png?auto=compress&w=300", roast: "Mediu")


puts "🤵 Seeding reviews..."
review1 = Review.create(text: "Lovely taste while not being overly harsh", coffee_id: coffee1.id, user_id: 1)
review2 = Review.create(text: "Slightly smoky blend with a sweet aftertaste", coffee_id: coffee2.id, user_id: 2)

puts "Done seeding!"