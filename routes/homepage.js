"use strict";

//this is the homepage 
//need from database restaurants address, name, phone number, image path, id
const express = require('express');
const router  = express.Router();
const dbData = require("./dbfunctions.js")


module.exports = (knex) => {

  router.get("/", (req, res) => {

    let templateVars = {};

  dbData.getAllRestaurantData("Steak and Fries").then(function(rows){
    let restaurantInfo = rows
    templateVars = restaurantInfo
  })
    res.render("index", templateVars);
  });

  return router;
}
