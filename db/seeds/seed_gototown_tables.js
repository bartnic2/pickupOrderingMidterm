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
        {id: 1, name: "Steak and Fries", email_address: "steaks@gmail.com", password: "cows", address: "1111 Mountain Drive", phone_number: "000-111-2222", images: {'rest_image_1': 'rest_image_1'}, description: "Great food for low, low prices"})
    })
    .then(function(){
      return knex('restaurant').insert(
        {id: 2, name: 'Real Italian Pizza', email_address: "pizza@gmail.com", password: "pizza", address: "1234 Newark Street", phone_number: "000-111-4444", images: {'rest_image_2': 'rest_image_2'}, description: "Real Pizza made by Real Italians"})
    })
    .then(function(){
      return knex('items').insert(
        {id: 1, restaurant_id: 1, name: 'Root Beer', category: 'drink', price: 5.00, images: {'item1_image': 'image1'}, size: 'medium', description: 'A sweet North American soft drink typically made using the sassafras tree or the sarsaparilla vine for primary flavor'})
    })
    .then(function(){
      return knex('items').insert(
        {id: 2, restaurant_id: 1, name: "Giant steak and fries", category: 'food', price: 15.00, images: {'item2_image': 'image2'}, size: 'large', description: 'Prime-rib steak with barbeque sauce and and helping of spicy fries'})
    })
    .then(function(){
      return knex('items').insert(
        {id: 3, restaurant_id: 2, name: "Pepperoni Pizza", category: 'food', price: 7.00, images: {'item1_image': 'image1'}, size: 'medium', description: 'A classic meal, made with deluxe tomato sauce, italian pepperoni, and mozzarella cheese'})
    })
    .then(function(){
      return knex('customer').insert(
        {id: 1, name: "John Wayne", address: "3920 Sarsaparilla Lane", email_address: "johnW@gmail.com", password: "wayne1234", phone_number: "647-938-1002"}
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
