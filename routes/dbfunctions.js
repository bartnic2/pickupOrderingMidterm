var knex = require('knex')(require('./knexfile').development)


module.exports = {
  getAllItems: function(){
    knex.select().from('items').asCallback(function(err, rows){
      if(err){
        return console.error(err);
      }
      return rows;
    })
  }

  getRestaurantInfo: function(){
    knex.select('')
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
