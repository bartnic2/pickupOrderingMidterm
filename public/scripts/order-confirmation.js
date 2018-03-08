
$(document).ready(function() {
  $(function() {
//use methodoverride to change to PUT maybe??
//confirmation of order by the restaurant
     $(() => {
      $.ajax({
        method: "POST",
        url: "/restaurant/:id/orderlist/confirm",
        data: .serialize()
       // success:
      }).done((users) => {
    //function here
        }
      });;
    });

  //the restaurant deleting an order once it's complete from restaurant orderlist page
  //use method override to allow it to be delete and not POST
    $(() => {
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