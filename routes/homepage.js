"use strict";

//this is the homepage 
//need from database restaurants address, name, phone number, image path, id
const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    let templateVars = {
    }
    res.render("index", templateVars);
  });

  return router;
}

