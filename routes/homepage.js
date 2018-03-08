"use strict";

//this is the homepage 

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

