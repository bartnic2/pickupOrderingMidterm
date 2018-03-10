exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users'),
    knex.schema.createTable('items', function(table){
      table.increments('id' );
      table.integer('restaurant_id');
      table.foreign('restaurant_id').references('restaurant.id');
      table.string('name');
      table.string('category');
      table.decimal('price', 6, 2);
      table.string('image');
      table.string('size');
      table.text('description');
    }),
    knex.schema.createTable('lineitems', function(table){
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
      table.string('address');
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
      table.timestamp('time_stamp').defaultTo(knex.fn.now());
    }),
    knex.schema.createTable('payments', function(table){
      table.increments('id');
      table.string('payment_method');
      table.string('payment_status');
    }),
    knex.schema.createTable('restaurant', function(table){
      table.increments('id');
      table.string('name');
      table.string('email_address');
      table.string('password');
      table.string('phone_number');
      table.string('address');
      table.text('description');
      table.string('image');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function (table) {
      table.increments();
      table.string('name');
    }),
    knex.raw('DROP TABLE items CASCADE'),
    knex.raw('DROP TABLE lineitems CASCADE'),
    knex.raw('DROP TABLE customer CASCADE'),
    knex.raw('DROP TABLE orders CASCADE'),
    knex.raw('DROP TABLE payments CASCADE'),
    knex.raw('DROP TABLE restaurant CASCADE')
  ])
};
