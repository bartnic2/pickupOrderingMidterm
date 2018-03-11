"use strict";

const express = require('express');
const router  = express.Router();
const dbFunctions = require("./dbfunctions.js")
//const users = require("")


  //   let customer = {
  //   name: "guy fieri",
  //   address: "123 fake street",
  //   phoneNumber: "452",
  //   email: "whatever@email",
  //   password: "secure"
  // }




module.exports = (knex) => {

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
      phoneNumber: req.body.phone,
      email: req.body.email,
      password: req.body.password
    }
    dbFunctions.getAllCustomerData(customer.name)
    .then(function(rows){
      if(customer.name === rows[0].name)
      console.log("username is already taken")
    })
    .catch(function(err){
      dbFunctions.registerUser(customer)
      res.redirect('/')
      console.log("i can register")
      console.log(err)
    })


  })


  return router;
}


