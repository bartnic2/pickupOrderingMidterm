const dbData = require("../../routes/dbfunctions.js")

//this is for the homepage and menu page
$(document).ready(function() {
  $(function() {
//     $(() => {
//       $.ajax({
//         method: "GET",
//         url: "/api/users"
//       }).done((users) => {
//         for(user of users) {
//           $("<div>").text(user.name).appendTo($("body"));
//         }
//       });;
//     });

  //login attempts from home and menu
    $(() => {
      event.preventDefault()
      $.ajax({
        method: "GET",
        url: "/login"
       // success:
      }).done((users) => {
        dbData.getAllCustomerData("John Wayne").then(function(rows){
          console.log("heee"+rows);
        })
      })
    });



  });
})

