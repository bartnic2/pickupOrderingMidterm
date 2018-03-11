
//this is for the homepage and menu page

$(document).ready(function() {

  $('.test').on('click', function(event){
    let info = {
      userName: $("#name").val(),
      password: $("#inputPassword").val()
    }
    event.preventDefault();
    $.post('/login', info).done(function(res){
      if(res === "invalid password"){
        $(".messages").text(res);
      }
      else if (res === "invalid username"){
        $(".messages").text(res);
      }
      else{
        $(".login-form").slideUp();
        $('.logout').css("visibility", "visible");
        $(".btn-register").css("visibility", "hidden");
        $(".messages").text(`${res}`);
      }
    })

  })

  $.get('/login').done(function(res){
    if(res !== "No User"){
      $(".login-form").css("visibility", "hidden");
      $(".btn-register").css("visibility", "hidden");
      $(".login-form").slideUp();
      $(".logout").css("visibility", "visible");
      $(".messages").text(`${res}`);
    }
  })

  $('.logout').on('click', function(event){
    $.post('/logout').done(function(res){
      $(".messages").text('');
      $(".login-form").css("visibility", "visible");
      $(".btn-register").css("visibility", "visible");
      $(".login-form").slideDown();
      $(".logout").css("visibility", "hidden");
    })
  })


})
