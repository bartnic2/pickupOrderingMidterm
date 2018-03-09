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

    dbData.getAllRestaurantItems(req.params.id).then(function(rows){
      for(let i = 0; i < rows.length; i++) { 

      let foodInfo = rows[i]
      templateVars[foodInfo.name] = foodInfo



        // let items = {  
        //   id: rows[i].id,
        //   name: rows[i].name,
        //   category: rows[i].category,
        //   price: rows[i].price,
        //   images: rows[i].images,
        //   size: rows[i].size,
        //   description: rows[i].description
        // }
        // templateVars[items.name] = items
        console.log(foodInfo)
      }

   //   console.log("this is root beer "+templateVars["Root Beer"].description)
      res.render('../views/order.ejs', {info:templateVars});
    })

    // dbData.getRestaurantData().then(function(rows){
      
    //  })
    // console.log("template vares"+templateVars)
    // console.log("broad root beer" + templateVars["Root Beer"])
    // console.log("this is root beer "+templateVars["Root Beer"].description)

  })
   


  return router;
}

 
