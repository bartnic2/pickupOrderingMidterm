"use strict";

//this is the current user order

const express = require('express');
const router  = express.Router();
const dbData = require("./dbfunctions.js")



module.exports = (knex) => {
  //order page

  router.get('/order/:id', (req, res) => {
  //  req.session.user_id = req.params.id;
    let templateVars = {

    }
    res.render('', templateVars);
  })

  return router;
}


