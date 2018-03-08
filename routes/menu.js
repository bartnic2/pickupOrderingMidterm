"use strict";

//this is the restaurant menu page

const express = require('express');
const router  = express.Router();
//may be more efficient to use the sms in the index
const textMessage = require('./sms.js')


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
  console.log('this is happening')
  textMessage.notifyOrderConfirmed();

    //placing the order you've created
  //redirects to the order page
  router.post('/order/:id', (req, res) => {
  //  req.session.user_id = req.params.id;
  //  req.session.user_id = req.params.userName;
    res.redirect('/')
  })


  return router;
}

