
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
  getRestaurantData: function(restaurant_id){
    return new Promise(function(resolve, reject){
      knex.select('name', 'address', 'email_address', 'phone_number', 'description', 'images').from('restaurant').where('restaurant.id','=',restaurant_id)
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
      knex.select('email_address', 'password').from('restaurant').where('restaurant.id','=',restaurant_id)
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
  },
  //receiving: customerid, [{itemID, quantity},{itemID2, quantity},...]
  enterOrderData: function(total, idArray, orderObject){
    return new Promise(function(resolve, reject){
      customerID = idArray[0];
      restaurantID = idArray[1];
      knex.insert({customer_id: customerID, restaurant_id: restaurantID, total_price: total})
      .returning('id')
      .into('orders')
      .then(function (orderID){
        for (itemID in orderObject){
          knex.insert({customer_id: customerID, item_id: itemID, order_id: orderID[0], quantity: orderObject[itemID]})
          .into('lineitems')
          .asCallback()
          }
        })
      .then(function(){
        return resolve("Insertion successful");
      })
      .catch(function(err){
        return reject(err);
      })
    });
  },
  retrieveOrderData: function(customerID){
    return new Promise(function(resolve, reject){
      knex.select().from('orders').where('customer_id', '=', customerID)
      .then(function(rows){
        return resolve(rows);
      })
      .catch(function(err){
        return reject(err);
      })
    })
  }
}

// For each item (or maybe just the first, assuming
// all items in one order obtained from same restaurant?).

// 1. Using itemid, obtain the restaurant id.
// 2. Generate new payments form, temporarily create
// empty payment method and status.
// 3. Using customer_id, restaurant_id, and payments_id, create a new order form. Pickup_time and total_price will be temporarily empty.
//


//For entering order data, you will want to first create a new order, then use that order ID, together with the customerID
//in order to specify each lineitem. Then, each key-value pair in the order object will generate a new row tied to those
//IDs.
