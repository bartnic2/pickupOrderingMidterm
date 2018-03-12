const express = require('express');
const router  = express.Router();
const dbData = require("./dbfunctions.js")


module.exports = (knex, randomString) => {

  router.post("/login", (req, res) => {
   dbData.getAllCustomerData(req.body.userName)
   .then(function(rows){
      if(rows[0].password === req.body.password){
        req.session.user_name = req.body.userName;
        console.log("Login req user name", req.session.user_name);
        res.send(`Hello, ${req.body.userName}`)
      } else {
        res.send("Invalid password")
      }
    })
    .catch(function(err){
      console.log(err)
      res.send("Invalid username")
    })
  });

  router.get("/login", (req, res) => {
    if(req.session.user_name){
      res.send(`Welcome, ${req.session.user_name}`);
    }else{
      res.send("No User");
    }
  });

  router.post("/logout", (req, res) => {
    req.session = null;
    res.send("success");
  })

  return router;
}
