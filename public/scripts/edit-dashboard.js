$(document).ready(function() {
  $(function() {

//adding a new menu item

      $("form").on("submit", function (event){
        event.preventDefault()
        $.ajax({
          method: "POST",
          url: "/restaurant/:id/dashboard/add"
         // success:
        }).done((users) => {
         //function here
        })
      })



  //removing a menu item from the menu
  //methodoveride to change to delete
      $("form").on("submit", function (event){
        event.preventDefault()
        $.ajax({
          method: "POST",
          url: "/restaurant/:id/dashboard/delete"
         // success:
        }).done((users) => {
         //function here
        })
      })



//editing an existing menu item
//change POST to PUT using method override
      $("form").on("submit", function (event){
        event.preventDefault()
        $.ajax({
          method: "POST",
          url: "/restaurant/:id/dashboard/edit"
         // success:
        }).done((users) => {
         //function here
        })
      })

  })
});