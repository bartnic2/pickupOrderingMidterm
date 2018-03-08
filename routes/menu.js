"use strict";

//this is the restaurant menu page

const express = require('express');
const router  = express.Router();


module.exports = (knex) => {

  //restaurant menu page
  //needs html file
  //need the 
  router.get('/restaurant/:id/menu', (req, res) => {
  //  req.session.user_id = req.params.id;
    let templateVars = {
    }
    res.render('', templateVars);
  })



    //placing the order you've created
  //redirects to the order page, if we're implementing payment then twilio message after payment, otherwise message should be from here
  router.post('/order/:id', (req, res) => {
  //  req.session.user_id = req.params.id;
  //  req.session.user_id = req.params.userName;

    knex('orders')
    .where()

    res.redirect(`/order/${}`)
  })


  return router;
}

