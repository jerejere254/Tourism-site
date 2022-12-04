# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


puts "Kuanza seeding 😱😱😱"


# Tourguide1 = Tourguide.create(username: "", phone: , email: "", avatar: Faker::Avatar.image, store_address: "", bio: Faker::Hacker.say_something_smart, password: "" ) 
puts "Akina Tourguides" 

Tourguide1 = Tourguide.create(username: "Johhny", user_type: "Tourguide", phone:254707629420, email:"tourguide1@gmail.com",address:"Nirobi1",bio:"Has guided over 20,000 movements",image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuw2hD46PYt9ak0yE8uuYPuWTul6A2r9B52w&usqp=CAU", password: "moringa" )
Tourguide2 = Tourguide.create(username: "Jerry",user_type: "Tourguide",  phone:254707629421, email:"tourguide2@gmail.com",address:"Nirobi2",bio:"Has guided over 10,000 movements",image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuw2hD46PYt9ak0yE8uuYPuWTul6A2r9B52w&usqp=CAU", password: "moringa") 
Tourguide3 = Tourguide.create(username: "Jerry",user_type: "Tourguide",  phone:254707629422, email:"tourguide3@gmail.com",address:"Nirobi3",bio:"Has guided over 15,000 movements",image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuw2hD46PYt9ak0yE8uuYPuWTul6A2r9B52w&usqp=CAU", password: "moringa")
puts "kumalizia malizia Tourguides"

puts "section Tourists"

# tourists1 = Tourists.create(username: "", phone: , email: "", avatar:Faker::Avatar.image, password: "" )

Tourists1 = Tourist.create(username: "Sangoma", user_type: "Tourists", phone: 254707629423 , email: "tourist1@gmail.com", password: "moringa" )
Tourists2 = Tourist.create(username: "Sins", user_type: "Tourists", phone: 254707629424 , email: "tourist2@gmail.com", password: "moringa" )
Tourists3 = Tourist.create(username: "Mchapakazi", user_type: "Tourists", phone: 254707629425 , email: "tourist3@gmail.com", password: "moringa" )

puts "Kuzima Tourists"




puts "digi site"


Site1 = Site.create(title:"Kenya" , description: "One of the best places in the world to see wildlife up close and personal, for many people, Kenya is the home of safari. Its endless savannah and arid deserts teem with life as lions, elephants, and buffalo roam alongside herds of antelope, flocks of flamingos, and the occasional black rhino.", price: 10000, image_url: "https://www.touropia.com/gfx/b/2020/01/kenya.jpg" , remaining:5 , tourguide_id:1 )
Site2 = Site.create(title:"Egypt" , description: "Renowned for its ancient monuments and archaeological sites that include the Giza Pyramids, the Great Sphinx, and the Valley of the Kings, Egypt is unlike any other country on Earth. Once home to one of the worlds greatest civilizations and cultures, history is on show wherever you go, with tombs and temples lying alongside statues and obelisks, all intricately carved", price: 15000, image_url: "https://www.touropia.com/gfx/b/2020/01/egypt.jpg" , remaining:5 , tourguide_id:1 )
Site3 = Site.create(title:"South Africa" , description: "Occupying the southernmost tip of the continent, South Africa boasts some of the best and most well-run national parks and game reserves in Africa. Of these, Kruger is undoubtedly the most well known and most visited, with Addo Elephant National Park also being a popular draw.", price: 20000, image_url: "https://www.touropia.com/gfx/b/2020/01/south_africa.jpg" , remaining:5 , tourguide_id:1 )
Site4 = Site.create(title:"Morocco" , description: "A magical place to visit, Morocco is home to a mesmerizing array of beautiful old cities, medinas, and souks. These lie along the countrys scenic Atlantic and Mediterranean coastlines or tucked away amongst the Saharan dunes and High Atlas mountains.", price: 8900, image_url: "https://www.touropia.com/gfx/b/2020/01/morocco.jpg" , remaining:5 , tourguide_id:1 )
Site5 = Site.create(title:"Seychelles" , description: "Lying some 1,500 kilometers to the east of mainland Africa, Seychelles is the continents smallest and least populous country. Made up of 115 islands, with the vast majority of them being uninhabited, the archipelago is incredibly beautiful and is surrounded by the glittering waters of the Indian Ocean.", price: 8000, image_url: "https://www.touropia.com/gfx/b/2020/01/seychelles.jpg" , remaining:5 , tourguide_id:1 )
Site6 = Site.create(title:"Tanzania" , description: "With so much to see and do in Tanzania, it can be hard to know where to start. The north of the country alone is home to the marvelous Ngorongoro Crater and the world-famous Serengeti, both of which are must-visits if you want to go on safari and see the Big Five. Here too, you will also find the snow-topped Mount Kilimanjaro  Africas highest peak", price: 9000, image_url: "https://www.touropia.com/gfx/b/2020/01/tanzania.jpg" , remaining:5 , tourguide_id:1 )
Site7 = Site.create(title:"Mauritius" , description: "While Mauritius certainly takes some getting used to, visitors invariably come away astounded at the incredible beaches, mountains, and waterfalls on show. Located over 1,000 kilometers to the east of Madagascar, its remote setting means it is home to some of the rarest plants and animals in the world.", price: 4900, image_url: "https://www.touropia.com/gfx/b/2020/01/mauritius.jpg" , remaining:5 , tourguide_id:1 )
Site8 = Site.create(title:"Uganda" , description: "Home to not only the continents tallest mountain range and the source of the Nile, land-locked Uganda also borders the largest lake in Africa. While its tourism industry and infrastructure are quite undeveloped in comparison with neighboring Kenya and Tanzania, this makes its spectacular landscapes all the more exciting to explore.", price: 5500, image_url: "https://www.touropia.com/gfx/b/2020/01/uganda.jpg" , remaining:5 , tourguide_id:1 )

puts " Tupo Seeding site"


puts "chimba bookings"

20.times do
    Book.create(tourists_id: rand(1..3), site_id: rand(1..8))
end

puts "Done Seeding booking"

puts "Imeisha 😂😂😂"