"use strict";

//this is the restaurants edit menu page

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/restaurant/:id/dashboard", (req, res) => {
  let templateVars = {
  }
  res.render("", templateVars);
  });

  return router;
}

