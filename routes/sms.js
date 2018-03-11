//https://www.twilio.com/console/sms/getting-started/build/order-notifications
//https://www.twilio.com/docs/libraries/node
"use strict";


//twilio number 1 647 699 7847

const http              = require('http');
const express           = require('express');
const router            = express();
// const accountSid          = 'AC76eb6ee8590a47c08cd0564696b08a95'; // Your Account SID from www.twilio.com/console

// const authToken           = require('./confidential.js').twilioToken;   // Your Auth Token from www.twilio.com/console

// const twilio              = require('twilio');
// const client              = new twilio(accountSid, authToken);

const MessagingResponse = require('twilio').twiml.MessagingResponse;



module.exports = (knex) => {

//needs to respond to user if 
 // reactive response to restaurant
  router.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();
console.log(req.body.Body)
    if (req.body.Body == 'number') {
      twiml.message('Customer will be by in number minutes');
    } else if(req.body.Body == 'Cancel') {
      twiml.message('Order cancelled');
    } else {
      twiml.message('No Body param match, Twilio sends this in the request to your server.');
    }

    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
  });
return router

}







// {
//     "sid": "SMeceae23ef3c449efaecda6c05214f70d",
//     "date_created": "Wed, 07 Mar 2018 17:15:03 +0000",
//     "date_updated": "Wed, 07 Mar 2018 17:15:03 +0000",
//     "date_sent": null,
//     "account_sid": "AC76eb6ee8590a47c08cd0564696b08a95",
//     "to": "+14164522009",
//     "from": "+16476997847",
//     "messaging_service_sid": null,
//     "body": "Sent from your Twilio trial account - hello",
//     "status": "queued",
//     "num_segments": "1",
//     "num_media": "0",
//     "direction": "outbound-api",
//     "api_version": "2010-04-01",
//     "price": null,
//     "price_unit": "USD",
//     "error_code": null,
//     "error_message": null,
//     "uri": "/2010-04-01/Accounts/AC76eb6ee8590a47c08cd0564696b08a95/Messages/SMeceae23ef3c449efaecda6c05214f70d.json",
//     "subresource_uris": {
//         "media": "/2010-04-01/Accounts/AC76eb6ee8590a47c08cd0564696b08a95/Messages/SMeceae23ef3c449efaecda6c05214f70d/Media.json"
//     }
// }