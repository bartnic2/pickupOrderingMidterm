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
  router.get('/restaurant/:name/menu', (req, res) => {
    //req.params.name
    dbData.getRestaurantData().then(function(rows){
      
    })

    let templateVars = {};

    dbData.getAllRestaurantItems("Steak and Fries").then(function(rows){
    for(let i = 0; i < rows.length; i++) { 
      let items = {  
        id: rows[i].id,
        name: rows[i].name,
        category: rows[i].category,
        price: rows[i].price,
        images: rows[i].images,
        size: rows[i].size,
        description: rows[i].description
      }
      templateVars.rows[i].name = items

      }

    })

    res.render('../views/menu.ejs', templateVars);
  })


  return router;
}


