const express = require('express');
const router  = express.Router();
const dbData = require("./dbfunctions.js")


module.exports = (knex, randomString) => {

  router.post("/login", (req, res) => {
   dbData.getAllCustomerData(req.body.userName)
   .then(function(rows){
      if(rows[0].password === req.body.password){
        req.session.user_name = req.body.userName;
        res.send(`Hello, ${req.body.userName}`)
      } else {
        res.send("invalid password")
      }
    })
    .catch(function(err){
      console.log(err)
      res.send("invalid username")
    })
  });

  router.get("/login", (req, res) => {
    if(req.session.user_name){
      res.send(`Welcome back, ${req.session.user_name}`);
    }else{
      res.send("No User");
    }
  });

  router.post("/logout", (req, res) => {
    res.clearCookie("user_name");
    res.send("cleared");
  })

  return router;
}
