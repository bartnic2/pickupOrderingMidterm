
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
>>>>>>> database
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
<<<<<<< HEAD
  //Pass in data as an object: [{restaurant_name: montanas, name_1: newname, price_1: newprice},{...},...etc]
  setItemData: function(dataObject){
    for(key in dataObject){
      knex.from('restaurant').update(key, dataObject[key])
    }
  }
}

=======
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
  //Pass in data as an object: [{restaurant_name: montanas, name_1: newname, price_1: newprice},{...},...etc]
  // setItemData: function(dataObject){
  //   knex('customer')

  // }
}


// function findName(name){
//   knex.select().from('famous_people').where("last_name", "=", name).orWhere("first_name", "=", name).asCallback(function(err, rows){
//     if(err) {
//       return console.error(err);
//     }
//     console.log("Searching...")
//     console.log(`Found ${rows.length} person(s) by the name '${name}':`)
//     for(row of rows){
//       console.log(`- ${row.id}: ${row.first_name} ${row.last_name}, born ${row.birthdate.toDateString()}`)
//     }
//   });
// }

// findName(name);
>>>>>>> database
