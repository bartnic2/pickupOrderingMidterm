"use strict";

//this is the restaurant menu page

const express = require('express');
const router  = express.Router();
const dbData = require("./dbfunctions.js")

module.exports = (knex) => {

  //restaurant menu page
  //needs html file
  //from database needs the restaurant, email, imagepath, address, name, phone number, id
  //needs everything from items
  router.get('/restaurant/:id/menu', (req, res) => {


    let templateVars = {};
 
    dbData.getRestaurantData(req.params.id).then(function(rows){
      templateVars.restaurantInfo = rows[0]
      templateVars.restaurantInfo.id = req.params.id
    })

  
    dbData.getAllRestaurantItems(req.params.id).then(function(rows){
      for(let i = 0; i < rows.length; i++) { 

      let foodInfo = rows[i]
      templateVars[foodInfo.name] = foodInfo
      }

   //   console.log("this is root beer "+templateVars["Root Beer"].description)
      res.render('../views/order.ejs', {info:templateVars});
    })


    // console.log("template vares"+templateVars)
    // console.log("broad root beer" + templateVars["Root Beer"])
    // console.log("this is root beer "+templateVars["Root Beer"].description)

  })
   


  return router;
}

