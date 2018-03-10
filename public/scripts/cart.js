$(document).ready(function() {



  //user adding a food item to the food list from the menu page
 $(".add-button").on("click", function (event){
    event.preventDefault()
    alert("yo")
    $.ajax({
      method: "POST",
      data: ,
      url: "/restaurant/menu/add",
      success: function (res) {
        console.log(res)
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
