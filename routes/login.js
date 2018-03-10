const express = require('express');
const router  = express.Router();
const dbData = require("./dbfunctions.js")


module.exports = (knex) => {

  router.post("/login", (req, res) => {
   console.log("heloooooo"+ req.body.username);
   dbData.getAllCustomerData(req.body.username).then(function(rows){
      console.log(rows[0].name)
      console.log(rows[0].password)
      if(rows[0].password === req.body.password){
        console.log("successful match")
      } else {
        console.log("wrong password")
      }
    })
    .catch(function(err){
    console.log(err)
    console.log("wrong")
    })
  });

  return router;
}


  //  if(userData){
  //   console.log("yay i'm a thing")
  //   console.log(userData.rows)
  //  }
  //  else{
  //   console.log("i am not in the database")
  //  }

  // dbData.getAllRestaurantData().then(function(rows){
   
  //  for(let i = 0; i < rows.length; i++){
  //     let restaurantInfo = rows[i]
  //     templateVars[restaurantInfo.name] = restaurantInfo
  //   }
  //   res.render("index", {info:templateVars});
  // })
