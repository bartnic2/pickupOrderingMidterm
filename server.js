"use strict";

require('dotenv').config();
const http = require('http');
const PORT            = process.env.PORT || 8080;
const ENV             = process.env.ENV || "development";
const express         = require("express");
const bodyParser      = require("body-parser");
const sass            = require("node-sass-middleware");
const app             = express();
const cookieSession   = require('cookie-session');

const MessagingResponse = require('twilio').twiml.MessagingResponse;




const knexConfig        = require("./knexfile");
const knex              = require("knex")(knexConfig[ENV]);
const morgan            = require('morgan');
const knexLogger        = require('knex-logger');
const twilio            = require('twilio');

// Seperated Routes for each Resource
const usersRoutes     = require("./routes/users");
const homeRoutes      = require("./routes/homepage");
const orderRoutes      = require("./routes/order");
const registerRoutes  = require("./routes/register");
const restOrderList   = require("./routes/restaurant-order-list");
const restDashboard   = require("./routes/restaurant-dashboard");
//const sms             = require("./routes/sms");
const login           = require("./routes/login");
const randomString    = require("./public/scripts/random-string.js");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));


app.use(cookieSession({
  name: "session",
  keys: ["szvszd"],
}))

//use to replace POSTS with PUT and DELETE
// app.use(methodOverride('_method'));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));


// Mount all resource routes
app.use("/api/users", usersRoutes(knex));
app.use(homeRoutes(knex));
app.use(orderRoutes(knex));
app.use(registerRoutes(knex, randomString));
app.use(restOrderList(knex));
app.use(restDashboard(knex));
//app.use(sms(knex));
app.use(login(knex, randomString));


const accountSid = 'AC76eb6ee8590a47c08cd0564696b08a95'; // Your Account SID from www.twilio.com/console

const authToken = require('./routes/confidential.js').twilioToken;   // Your Auth Token from www.twilio.com/console

const client = require('twilio')(accountSid, authToken);






client.messages
  .create({
    to: '+14164522009',
    from: '+16476997847',
    body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
  })
  .then(message => console.log(message.sid));




app.post('/sms', (req, res) => {
console.log(req.body)
 const twiml = new MessagingResponse();

  twiml.message('The Robots are coming! Head for the hills!');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});



app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
