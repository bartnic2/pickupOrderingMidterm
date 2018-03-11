// const dbData = require("../../routes/dbfunctions.js")

//this is for the homepage and menu page

$(document).ready(function() {

// let button = $('form').find('button');


  $('.test').on('click', function(event){
    console.log('clicked');

    let info = {
      userName: $("#name").val(),
      password: $("#inputPassword").val()
    }
    event.preventDefault();
    $.post('/login', info).done(function(res){
      if(res === "You have been signed in"){
        $(".form-signin").slideUp()
        $("div.container").append(`<h2>${res}</h2>`)
      } else if (res === "invalid password"){
        $(".form-signin-heading").text(res)
      } else if (res === "invalid username") {
        $(".form-signin-heading").text(res)
      }
    })

  })
})
  // $("form").find("button").on("click", function (event){
//     console.log("button was hit");
//     event.preventDefault();
//     $.post("/login").done(function(result){
//         console.log("ajax is picking up")
//         console.log(result)
//     })
//     .fail(function(error){
//       console.error(error)
//     })
//   })
// })

// })


  //login attempts from home and menu
    // $(() => {
    //   event.preventDefault()
    //   $.ajax({
    //     method: "GET",
    //     url: "/login"
    //    // success:
    //   }).done((users) => {
    //     dbData.getAllCustomerData("John Wayne").then(function(rows){
    //       console.log("heee"+rows);
    //     })
    //   })
    // });

// })

