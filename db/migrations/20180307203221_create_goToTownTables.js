exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users'),
    knex.schema.createTable('items', function(table){
      table.increments('id');
      table.integer('restaurant_id');
      table.foreign('restaurant_id').references('restaurant.id');
      table.string('name');
      table.string('category');
      table.decimal('price', 6, 2);
      table.json('images');
      table.string('size');
      table.text('description');
    }),
    knex.schema.createTable('lineItems', function(table){
      table.increments('id');
      table.integer('customer_id');
      table.foreign('customer_id').references('customer.id');
      table.integer('item_id');
      table.foreign('item_id').references('items.id');
      table.integer('order_id');
      table.foreign('order_id').references('orders.id');
      table.integer('quantity');
    }),
    knex.schema.createTable('customer', function(table){
      table.increments('id');
      table.string('email_address');
      table.string('name');
      table.string('password');
      table.string('phone_number');
    }),
    knex.schema.createTable('orders', function(table){
      table.increments('id');
      table.integer('customer_id');
      table.foreign('customer_id').references('customer.id');
      table.integer('restaurant_id');
      table.foreign('restaurant_id').references('restaurant.id');
      table.integer('payments_id');
      table.foreign('payments_id').references('payments.id');
      table.string('pickup_time');
      table.decimal('total_price', 6, 2);
      table.time('time_stamp');
    }),
    knex.schema.createTable('payments', function(table){
      table.increments('id');
      table.string('payment_method');
      table.string('payment_status');
    }),
    knex.schema.createTable('restaurant', function(table){
      table.increments('id');
      table.string('email_address');
      table.string('name');
      table.string('password');
      table.string('phone_number');
      table.string('address');
      table.json('images');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function (table) {
      table.increments();
      table.string('name');
    }),
    knex.schema.dropTable('items'),
    knex.schema.dropTable('lineItems'),
    knex.schema.dropTable('customer'),
    knex.schema.dropTable('orders'),
    knex.schema.dropTable('payments'),
    knex.schema.dropTable('restaurant')
  ])
};
