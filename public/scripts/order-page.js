$(document).ready(function() {
  $(function() {

    let textMessage = require("./twilioFunctions.js")
      //placing the order you've created
    //redirects to the order page, if we're implementing payment then twilio message after payment, otherwise message should be from here
    

     $("form").on("submit", function (event){
        event.preventDefault()
        $.ajax({
          method: "POST",
          url: "/order:id"
         // success:
        }).done((users) => {
          textMessage.notifyRestaurant()
         //function here
        })
      })



  });
})