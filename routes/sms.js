// //https://www.twilio.com/console/sms/getting-started/build/order-notifications
// //https://www.twilio.com/docs/libraries/node
// "use strict";
//vary important, every time you restart ngrok need to update twilio account  with http and /sms
//https://www.twilio.com/docs/quickstart/node/programmable-sms#allow-twilio-to-talk-to-your-nodejs-application-with-ngrok
// //twilio number 1 647 699 7847

const express = require('express');
const router  = express();
const sendMessage = require('../public/scripts/twilioFunctions')
const twilio = require('twilio');

const http              = require('http');
const MessagingResponse = require('twilio').twiml.MessagingResponse;



module.exports = (knex) => {

//needs to respond to user if 
 // reactive response to restaurant
 //if we have time add a response to "cancel from restaurant"
  router.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();
//right now will only find integers nad not string numbers
    let findTime = req.body.Body.match(/\d/g)
    let pickupTime = "";

    function cooktime(){
      return new Promise(function(resolve, reject){
        //condition1
        for (let num of findTime){
         pickupTime += num;
      }
        return resolve(pickupTime)
      })
    }
    cooktime().then(function(result){
      //message to restaurant
      twiml.message(`Thank you, customer will be by in ${pickupTime} minutes`);
      //message to customer
      sendMessage.notifyOrderConfirmed("orderlist", pickupTime)
      console.log("result " + result)
      res.writeHead(200, {'Content-Type': 'text/xml'});
      res.end(twiml.toString());
    })
    .catch(function(err){
      //message to restaurant
      twiml.message(`Please reply with a valid pickup time in minutes`);
      console.log(err)
      res.writeHead(200, {'Content-Type': 'text/xml'});
      res.end(twiml.toString())
    })
  });
return router

}

