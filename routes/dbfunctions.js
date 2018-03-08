var knex = require('knex')(require('./knexfile').development)

module.exports = {
  getAllItems: function(restaurant_name){
    knex.select().from('items').join('restaurant', 'restaurant_id', 'restaurant.id').where('restaurant.name','=',restaurant_name).asCallback(function(err, rows){
      if(err){
        return console.error(err);
      }
      return rows;
    })
  },
  getRestaurantData: function(restaurant_name){
    knex.select('name, address, email_address, phone_number, description, images').from('restaurant').where('restaurant.name','=',restaurant_name).asCallback(function(err, rows){
      if(err){
        return console.error(err);
      }
      return rows;
    })
  },
  getRestaurantLoginData: function(restaurant_name){
    knex.select('email_address, password').from('restaurant').where('restaurant.name','=',restaurant_name).asCallback(function(err, rows){
      if(err){
        return console.error(err);
      }
      return rows;
    })
  },
  getAllCustomerData: function(customer_name){
    knex.select('name, address, email_address, password, phone_number').from('customer').where('customer.name','=',customer_name).asCallback(function(err, rows){
      if(err){
        return console.error(err);
      }
      return rows;
    })
  },
  //Pass in data as an object: [{restaurant_name: montanas, name_1: newname, price_1: newprice},{...},...etc]
  setItemData: function(dataObject){
    for(key in dataObject){
      knex.from('restaurant').update(key, dataObject[key])
    }
  }
}

