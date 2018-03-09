var knex = require('knex')(require('../knexfile.js').development)

module.exports = {
  getAllRestaurantItems: function(restaurant_name){
    return new Promise(function(resolve, reject){
      resolve(knex.select('items.id', 'items.name', 'category', 'price', 'items.images', 'size', 'items.description').from('items').join('restaurant', 'restaurant_id', 'restaurant.id').where('restaurant.name','=',restaurant_name)
        .then(function(rows){
          return rows;
        }))
        .catch(function(err){
          console.log(err);
        })
      reject(function(err){
          return err;
      })
    })
  },
  getRestaurantData: function(restaurant_name){
    return new Promise(function(resolve, reject){
      resolve(knex.select('name', 'address', 'email_address', 'phone_number', 'description', 'images').from('restaurant').where('restaurant.name','=',restaurant_name)
        .then(function(rows){
          return rows;
        }))
        .catch(function(err){
          console.log(err);
        })
      reject(function(err){
          return err;
      })
    })
  },
  getRestaurantLoginData: function(restaurant_name){
    return new Promise(function(resolve, reject){
      resolve(knex.select('email_address', 'password').from('restaurant').where('restaurant.name','=',restaurant_name)
        .then(function(rows){
          return rows;
        }))
        .catch(function(err){
          console.log(err);
        })
      reject(function(err){
          return err;
      })
    })
  },
  getAllCustomerData: function(customer_name){
    return new Promise(function(resolve, reject){
      resolve(knex.select('name', 'address', 'email_address', 'password', 'phone_number').from('customer').where('customer.name','=',customer_name)
        .then(function(rows){
          return rows;
        }))
        .catch(function(err){
          console.log(err);
        })
      reject(function(err){
          return err;
      })
    })
  },
  getAllItems: function(){
    return new Promise(function(resolve, reject){
      resolve(knex.select().from('items')
        .then(function(rows){
          return rows;
        }))
      reject(function(err){
          return err;
      })
    })
  }
}
