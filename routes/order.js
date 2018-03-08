"use strict";

//this is the current user order

const express = require('express');
const router  = express.Router();


module.exports = (knex) => {
  //order page
  //needs html file

  router.get('/order/:id', (req, res) => {
  //  req.session.user_id = req.params.id;
    let templateVars = {

    }
    res.render('', templateVars);
  })

  return router;
}


