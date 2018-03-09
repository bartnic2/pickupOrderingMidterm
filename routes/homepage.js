"use strict";

//this is the homepage 
//need from database restaurants address, name, phone number, image path, id
const express = require('express');
const router  = express.Router();
const dbData = require("./dbfunctions.js")


module.exports = (knex) => {

  router.get("/", (req, res) => {
    let templateVars = {};

  dbData.getAllRestaurantData().then(function(rows){
   
   for(let i = 0; i < rows.length; i++){
      let restaurantInfo = rows[i]
      templateVars[restaurantInfo.name] = restaurantInfo
    }
    res.render("index", {info:templateVars});
  })


  });

  return router;
}

