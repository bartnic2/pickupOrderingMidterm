"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  //register page
  //needs html file
  router.get('/register', (req, res) => {
    let templateVars = {
      
    }
    res.render('', templateVars);
  })
  //registering a user
  router.post('/register', (req, res) => {

    res.redirect('/')
  })


  return router;
}


