//Note: Doesn't exactly work when you run twice (need to debug). But that shouldn't matter long-term since it only needs to be run once.

exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('lineitems').del(),
    knex('orders').del(),
    knex('payments').del(),
    knex('customer').del(),
    knex('items').del(),
    knex('restaurant').del()
    ])
    .then(function(){
      return knex('restaurant').insert(
        {id: 1, name: "Fresh on Spadina", email_address: "info@freshrestaurants.ca", password: "spadina", address: "147 Spadina Ave, Toronto, ON", phone_number: "(416) 599-4442", image: 'img/Fresh on Spadina.jpeg', description: "A large menu of modern vegetarian & vegan dishes, plus made-to-order juices, in a lively eatery."})
    })
    .then(function(){
      return knex('restaurant').insert(
        {id: 2, name: "Ricarda's Restaurant", email_address: "order@oodora.ca", password: "ricarda", address: "134 Peter St, Toronto, ON", phone_number: "(416) 304-9134", image: 'img/Ricarda\'s Restaurant.jpeg', description: "Opening early to offer coffee & baked goods, this airy eatery also serves modern Mediterranean fare."})
    })
    .then(function(){
      return knex('restaurant').insert(
        {id: 3, name: 'Little India Restaurant', email_address: "order@littleindia.ca", password: "littleindia", address: "255 Queen St W, Toronto", phone_number: "(416) 205-9836", image: 'img/Little India Restaurant.jpg', description: "Compact, family-owned fixture offering familiar Indian dishes & a lunch buffet in a relaxed space."})
    })
    .then(function(){
      return knex('restaurant').insert(
        {id: 4, name: 'Aroma Fine Indian Cuisine', email_address: "Order@aromafineindiancuisineon.com", password: "fineindian", address: "287 King St W, Toronto", phone_number: "(416) 971-7242", image: 'img/Aroma Fine Indian Cuisine.jpeg', description: "Upscale, 2nd-storey Indian go-to with all-you-can-eat lunch buffet & mild-to-hot à la carte options."})
    })
    .then(function(){
      return knex('restaurant').insert(
        {id: 5, name: 'Il Fornello on King', email_address: "Order@ilfornello.com", password: "fornello", address: "214 King St W, Toronto, ON", phone_number: "(416) 977-2855", image: 'img/Il Fornello on King.jpeg', description: "Pasta & Neapolitan-style pizza from a relaxed eatery that's popular with pre-theatre diners."})
    })
    .then(function(){
      return knex('restaurant').insert(
        {id: 6, name: 'Planta Burger', email_address: "Order@plantaburger.ca", password: "planta", address: "4 Temperance St, Toronto, ON", phone_number: "(647) 348-7000", image: 'img/Planta Burger.jpg', description: "Cozy counter serve with a striped decor serving inventive vegan burgers plus sides & milkshakes."})
    })
    .then(function(){
      return knex('restaurant').insert(
        {id: 7, name: 'Sukhothai', email_address: "order@Sukhothai.ca", password: "sukho", address: "52 Wellington St E, Toronto, ON", phone_number: "(647) 351-4612", image: 'img/Sukhothai.jpeg', description: "Husband-and-wife owners serve classic Thai fare, from spring rolls to curries, in a casual setting."})
    })
    .then(function(){
      return knex('items').insert(
        {id: 1, restaurant_id: 1, name: 'Root Beer', category: 'drink', price: 5.00, image: 'image1', size: 'medium', description: 'A sweet North American soft drink typically made using the sassafras tree or the sarsaparilla vine for primary flavor'})
    })
    .then(function(){
      return knex('items').insert(
        {id: 2, restaurant_id: 1, name: "Cucumber Salad", category: 'food', price: 7.00, image: 'image2', size: 'medium', description: 'This cucumber salad comes fresh from local producers, and contains deluxe ranch dressing'})
    })
    .then(function(){
      return knex('items').insert(
        {id: 3, restaurant_id: 2, name: "Giant steak and fries", category: 'food', price: 15.00, image: 'image3', size: 'large', description: 'Prime-rib steak with barbeque sauce and and helping of spicy fries'})
    })
    .then(function(){
      return knex('items').insert(
        {id: 4, restaurant_id: 2, name: "Pepperoni Pizza", category: 'food', price: 7.00, image: 'image4', size: 'medium', description: 'A classic meal, made with deluxe tomato sauce, italian pepperoni, and mozzarella cheese'})
    })
    .then(function(){
      return knex('customer').insert(
        {name: "John Wayne", address: "3920 Sarsaparilla Lane", email_address: "johnW@gmail.com", password: "wayne1234", phone_number: "647-938-1002"}
      )
    })
    .then(function(){
      return knex('payments').insert(
        {id: 1, payment_method: "visa", payment_status: "accepted"}
      )
    })
    .then(function(){
      return knex('orders').insert(
        {id: 1, customer_id: 1, restaurant_id: 1, payments_id: 1, pickup_time: "15", total_price: 29.00}
      )
    })
    .then(function(){
      return knex('lineitems').insert(
        {id: 1, customer_id: 1, item_id: 1, order_id: 1, quantity: 3}
      )
    })
    .then(function(){
      return knex('lineitems').insert(
        {id: 2, customer_id: 1, item_id: 2, order_id: 1, quantity: 2}
      )
    })
}
