
const accountSid = 'AC76eb6ee8590a47c08cd0564696b08a95'; // Your Account SID from www.twilio.com/console

const authToken = require('../../routes/confidential.js').twilioToken;   // Your Auth Token from www.twilio.com/console

const client = require('twilio')(accountSid, authToken);

module.exports =  {
    //the two user functions can be turned into one
  // to user
    notifyOrderConfirmed: function (orderlist, pickupTime){
      client.messages.create({
          body: `Hi , your order for orderlist has been received and will be ready for pickup in ${pickupTime} minutes`,
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
    notifyRestaurant: function(orderInfo){
      console.log("ddddddddorder info id "+orderInfo)
      let orderList= "";
      for(let name of orderInfo.order){
        orderList += orderInfo.order[name] + name,
      }
      console.log("food items " + orderList)
      client.messages.create({
          body: `Hi ${orderInfo.restaurant_email}, an order of ${orderlist} has been placed by ${orderInfo.card.name}, please respond with the time in it will take in minutes to prepare`,
          to: '+14164522009',  // Text this restaurant number
          from: '+16476997847' // From a valid Twilio number
      })
      .then((message) => console.log(message.sid));
    }
  
}
//     