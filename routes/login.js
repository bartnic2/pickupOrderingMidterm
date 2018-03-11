const express = require('express');
const router  = express.Router();
const dbData = require("./dbfunctions.js")


module.exports = (knex) => {

  router.post("/login", (req, res) => {
console.log(req.body.userName)
console.log(req.body.password)
   dbData.getAllCustomerData(req.body.userName)
   .then(function(rows){
      if(rows[0].password === req.body.password){
        res.send("You have been signed in")
      } else {
        res.send("invalid password")
      }
    })
    .catch(function(err){
      console.log(err)
      res.send("invalid username")
    })
  });
  return router;
}

