"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  //register page
  //needs html file
  router.get('/register', (req, res) => {
    let templateVars = {
      
    }
    console.log('register is picking up')
    res.render('../views/register.ejs', templateVars);
  })
  //registering a user
  //need to check if user already exists, call database with knex
  router.post('/register', (req, res) => {
    let registerUser = {
      name: req.body.name,
      address: req.body.address,
      phoneNumber: req.body.phone,
      email: req.body.email,
      password: req.body.password
    }
    console.log(registerUser)
    res.redirect('/')
  })


  return router;
}


