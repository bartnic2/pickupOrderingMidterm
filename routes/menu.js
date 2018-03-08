"use strict";

//this is the restaurant menu page

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  //restaurant menu page
  //needs html file
  //from database needs the restaurant, email, imagepath, address, name, phone number, id
  //needs everything from items
  router.get('/restaurant/:id/menu', (req, res) => {
  //   = req.params.id;
    let templateVars = {
    }
    res.render('../views/menu.ejs', templateVars);
  })


  return router;
}

