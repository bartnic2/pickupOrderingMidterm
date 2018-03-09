$(document).ready(function() {



  //user adding a food item to the food list from the menu page
 $(".add-button").on("submit", function (event){
    event.preventDefault()
    $.ajax({
      method: "POST",
      url: "/restaurant/menu/add",
      success: function (stuff) {
        alert("success")
        console.log(stuff)
      }
    })
  })








//deleting a food item from your order list before it's submitted, menu page
//should take
 $(".remove-button").on("submit", function (event){
    event.preventDefault()
    $.ajax({
      method: "POST",
      url: "/restaurant/:id/menu/delete"
     // success:
    }).done((users) => {
     //function here
    })
  })


})
