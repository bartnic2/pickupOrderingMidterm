
//this is for the homepage and menu page

$(document).ready(function() {

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