"use strict";

require('dotenv').config();

const PORT            = process.env.PORT || 8080;
const ENV             = process.env.ENV || "development";
const express         = require("express");
const bodyParser      = require("body-parser");
const sass            = require("node-sass-middleware");
const methodOverride  = require('method-override')
const app             = express();

const knexConfig        = require("./knexfile");
const knex              = require("knex")(knexConfig[ENV]);
const morgan            = require('morgan');
const knexLogger        = require('knex-logger');
const twilio            = require('twilio');




// Seperated Routes for each Resource
const usersRoutes     = require("./routes/users");
const homeRoutes      = require("./routes/homepage");
const orderRoutes      = require("./routes/order");
const confirmationRoutes     = require("./routes/confirmation");
const registerRoutes  = require("./routes/register");
const restOrderList   = require("./routes/restaurant-order-list")
const restDashboard   = require("./routes/restaurant-dashboard")
const sms             = require("./routes/sms")


app.post("/restaurant/menu/add", (req, res) => {
  console.log(req.body)
  res.send("hello");
})


// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

//use to replace POSTS with PUT and DELETE
app.use(methodOverride('_method'));

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
app.use(confirmationRoutes(knex));
app.use(registerRoutes(knex));
app.use(restOrderList(knex));
app.use(restDashboard(knex));
app.use(sms(knex));


app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
