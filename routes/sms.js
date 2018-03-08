//https://www.twilio.com/console/sms/getting-started/build/order-notifications
//https://www.twilio.com/docs/libraries/node

//
//twilio number 1 647 699 7847


var accountSid = 'AC76eb6ee8590a47c08cd0564696b08a95'; // Your Account SID from www.twilio.com/console

var authToken = require('./confidential.js').twilioToken;   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);


const textMessage = {
// to user
  notifyOrderConfirmed: function (){
    client.messages.create({
        body: `Hi , your order for orderlist has been received and will be ready for pickup in minutes, here's the tracking link`,
        to: '+14164522009',  // Text this users number
        from: '+16476997847' // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
  },

  // to user
  notifyOrderDone: function () {
    client.messages.create({
        body: `Hi user, your order of orderlist is ready for pickup`,
        to: '+14164522009',  // Text this users number
        from: '+16476997847' // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
  },
  //to restaurant
  notifyRestaurant: function(){
    client.messages.create({
        body: `Hi restaurant, an order for orderlist has been placed by user, please let them know when their order will be ready for pickup here link`,
        to: '+14164522009',  // Text this restaurant number
        from: '+16476997847' // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
  }

}

module.exports = textMessage;


// curl 'https://api.twilio.com/2010-04-01/Accounts/AC76eb6ee8590a47c08cd0564696b08a95/Messages.json' -X POST \
// --data-urlencode 'To=+14164522009' \
// --data-urlencode 'From=+16476997847' \
// --data-urlencode 'Body=hello' \
// -u AC76eb6ee8590a47c08cd0564696b08a95:[AuthToken]



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