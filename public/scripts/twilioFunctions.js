const accountSid = 'ACcb15d99d0aefb967d5ff5dd007e9e9a6'; // Your Account SID from www.twilio.com/console

const authToken = require('../../routes/confidential.js').twilioToken;   // Your Auth Token from www.twilio.com/console

const client = require('twilio')(accountSid, authToken);

module.exports =  {
   //the two user functions can be turned into one
 // to user
   notifyOrderConfirmed: function (phone, pickupTime){
    console.log(phone);
     client.messages.create({
         body: `Hi, your order has been received and will be ready for pickup in ${pickupTime} minutes`,
         to: `+1${phone}`,  // Text this users number
         from: '+16476993697' // From a valid Twilio number
     })
     .then((message) => console.log(message.sid));
   },

   // to user, we may not use this
   notifyOrderDone: function () {
     client.messages.create({
         body: `Hi user, your order of orderlist is ready for pickup`,
         to: '+14164522009',  // Text this users number
         from: '+16476993697' // From a valid Twilio number
     })
     .then((message) => console.log(message.sid));
   },
   //to restaurant
   notifyRestaurant: function(orderInfo){
     let orderList = "";
     for(let name in orderInfo.order){
       orderList += `${orderInfo.order[name]} ${name}, `;
     }
     console.log("order list " + orderList)
     console.log(orderInfo.restaurant_email)
     let phone = orderInfo.restaurant_phone.slice(0, 10).toString()
     client.messages.create({
         body: `Hi ${orderInfo.restaurant_email}, an order of ${orderList} has been placed by ${orderInfo.card.name}, please respond with the time it will take to prepare in minutes`,
         to: `+1${phone}`,  // Text this restaurant number replace with your own to test though${orderInfo.restaurant_phone}
         from: '+16476993697' // From a valid Twilio number
     })
     .then((message) => console.log(message.sid));
   }
}
