$(document).ready(function() {
  $(function() {

//may be more efficient to use the sms in the index
const textMessage = require('../../routes/sms.js')



//use methodoverride to change to PUT maybe??
//confirmation of order by the restaurant
     $(() => {
      event.preventDefault()
      $.ajax({
        method: "POST",
        url: "/restaurant/:id/orderlist/confirm",
        data: .serialize()
       // success:
      }).done((users) => {
    //function here
      //sends the text message to the restaurant
        textMessage.notifyOrderConfirmed();
        }
      });;
    });


//we need a function that will send a twilio message to the client when the timer runs out

  //the restaurant deleting an order once it's complete from restaurant orderlist page
  //use method override to allow it to be DELETE and not POST
    $(() => {
      event.preventDefault()
      $.ajax({
        method: "POST",
        url: "/restaurant/:id/orderlist/delete"
       // success:
      }).done((users) => {
    //function here
        }
      });;
    });

  };
})