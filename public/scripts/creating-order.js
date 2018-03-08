$(document).ready(function() {
  $(function() {
  //user adding a food item to the food list from the menu page
     $(() => {
      event.preventDefault()
      $.ajax({
        method: "POST",
        url: "/restaurant/:id/menu/add"
       // success:
      }).done((users) => {
    //function here
        }
      });;
    });

  //deleting a food item from your order list before it's submitted, menu page
  //should take
    $(() => {
      event.preventDefault()
      $.ajax({
        method: "POST",
        url: "/restaurant/:id/menu/delete"
       // success:
      }).done((users) => {
    //function here
        }
      });;
    });

  };
})