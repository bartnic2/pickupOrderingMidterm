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
    knex('customer')

  }

}


function findName(name){
  knex.select().from('famous_people').where("last_name", "=", name).orWhere("first_name", "=", name).asCallback(function(err, rows){
    if(err) {
      return console.error(err);
    }
    console.log("Searching...")
    console.log(`Found ${rows.length} person(s) by the name '${name}':`)
    for(row of rows){
      console.log(`- ${row.id}: ${row.first_name} ${row.last_name}, born ${row.birthdate.toDateString()}`)
    }
  });
}

findName(name);
