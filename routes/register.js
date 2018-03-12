"use strict";

const express = require('express');
const router  = express.Router();
const dbFunctions = require("./dbfunctions.js")
//const users = require("")

module.exports = (knex, randomString) => {

  //register page
  //needs html file
  router.get('/register', (req, res) => {
    let templateVars = {
    }
    res.render('../views/register.ejs', templateVars);
  })
  //registering a user
  //need to check if user already exists, call database with knex


  router.post('/register', (req, res) => {
    let customer = {
      name: req.body.name,
      address: req.body.address,
      phone_number: req.body.phone,
      email_address: req.body.email,
      password: req.body.password
    }
    req.session.user_name = customer.name;
    dbFunctions.getAllCustomerData(customer.name)
    .then(function(rows){
      if(customer.name === rows[0].name)
      console.log("Username is already taken")
    })
    .catch(function(err){
      dbFunctions.registerUser(customer)
      res.redirect('/')
      console.log(err)
    })
  })
  return router;
}


