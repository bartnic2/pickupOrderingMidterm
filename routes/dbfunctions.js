
var knex = require('knex')(require('../knexfile.js').development)

module.exports = {
  getAllRestaurantItems: function(restaurant_id){
    return new Promise(function(resolve, reject){
      knex.select('items.id', 'items.name', 'category', 'price', 'items.images', 'size', 'items.description').from('items').join('restaurant', 'restaurant_id', 'restaurant.id').where('restaurant.id','=',restaurant_id)
        .then(function(rows){
          return resolve(rows);
        })
        .catch(function(err){
          return reject(err);
        })
    })
  },
  getRestaurantData: function(restaurant_name){
    return new Promise(function(resolve, reject){
      knex.select('name', 'address', 'email_address', 'phone_number', 'description', 'images').from('restaurant').where('restaurant.name','=',restaurant_name)
        .then(function(rows){
          return resolve(rows);
        })
        .catch(function(err){
          return reject(err);
        })
    })
  },
    getAllRestaurantData: function(){
    return new Promise(function(resolve, reject){
      resolve(knex.select('*').from('restaurant')
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
      knex.select('email_address', 'password').from('restaurant').where('restaurant.name','=',restaurant_name)
        .then(function(rows){
          return resolve(rows);
        })
        .catch(function(err){
          return reject(err);
        })
    })
  },
  getAllCustomerData: function(customer_name){
    return new Promise(function(resolve, reject){
      knex.select('name', 'address', 'email_address', 'password', 'phone_number').from('customer').where('customer.name','=',customer_name)
        .then(function(rows){
          return resolve(rows);
        })
        .catch(function(err){
          return reject(err);
        })
    })
  },
  getAllItems: function(){
    return new Promise(function(resolve, reject){
      knex.select().from('items')
        .then(function(rows){
          return resolve(rows);
        })
        .catch(function(err){
          return reject(err);
        })
    })
  },
  setRestaurantItems: function(primaryKey, newItemsObj){
    return new Promise(function(resolve, reject){
      for (item in newItemsObj){
        knex.from('items').where('items.id', '=', primaryKey).update(item,newItemsObj[item]).catch(function(err){
          return reject(err);
        })
      }
      return resolve("success");
    })
  },
  checkForCustomer: function(customerName){
    return new Promise(function(resolve, reject){
      knex.select().from('customer').where('name','=',customerName)
        .then(function(rows){
          if(rows.length === 0){
            return resolve(false);
          }else{
            return resolve(true);
          }
        })
        .catch(function(err){
          return reject(err);
        })
    })
  }
}

//Create a function where the restaurant can set all its 'item' data
