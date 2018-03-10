"use strict";

//this is the restaurant menu page
const keyPublishable  = process.env.PUBLISHABLE_KEY;
const keySecret       = process.env.SECRET_KEY;
const express = require('express');
const router  = express.Router();
const dbData = require("./dbfunctions.js")
const stripe = require("stripe")(keySecret);

module.exports = (knex) => {

  //restaurant menu page
  //needs html file
  //from database needs the restaurant, email, imagepath, address, name, phone number, id
  //needs everything from items
  router.get('/restaurant/:id/menu', (req, res) => {
    let templateVars = {};
    templateVars.foodmenu = {};
    Promise.all([
      dbData.getRestaurantData(req.params.id).then(function(rows){
        templateVars.restaurantInfo = rows[0];
        templateVars.restaurantInfo.id = req.params.id;
      }),
      dbData.getAllRestaurantItems(req.params.id).then(function(rows){
        for(let i = 0; i < rows.length; i++) {
          let foodInfo = rows[i];
          templateVars.foodmenu[foodInfo.name] = foodInfo;
        }
      })
    ]).then(function(){
      res.render('../views/order.ejs', {info:templateVars});
    })
  })

  router.post("/charge", (req, res) => {
    let amount = 500;
    console.log(req.body);
    stripe.customers.create({
       email: req.body.stripeEmail,
      source: req.body.stripeToken
    })
    .then(customer =>
      stripe.charges.create({
        amount,
        description: "Sample Charge",
           currency: "usd",
           customer: customer.id
      }))
    .then(charge => res.render("../views/charge.ejs"));
  });

  return router;
}

