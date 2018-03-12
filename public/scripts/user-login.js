
//this is for the homepage and menu page

$(document).ready(function() {

  $('.restaurant').on('submit', function(event){
    event.preventDefault();
  });

  $('.signin').on('click', function(event){
    let info = {
      userName: $("#name").val(),
      password: $("#inputPassword").val()
    }
    event.preventDefault();
    $.post('/login', info).done(function(res){
      if(res === "Invalid password"){
        $(".messages").text(res);
      }
      else if (res === "Invalid username"){
        $(".messages").text(res);
      }
      else{
        $(".login-form").slideUp();
        $('.logout').css("visibility", "visible");
        $(".btn-register").css("visibility", "hidden");
        $(".messages").text(`${res}`);
        $('.restaurant').unbind('submit');
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
      $('.restaurant').unbind('submit');
    }
  })

  $('.logout').on('click', function(event){
    $.post('/logout').done(function(res){
      $(".messages").text('');
      $(".login-form").css("visibility", "visible");
      $(".btn-register").css("visibility", "visible");
      $(".login-form").slideDown();
      $(".logout").css("visibility", "hidden");
      $('.restaurant').on('submit', function(event){
        event.preventDefault();
      });
    })
  })
   $("#confirmation-window").slideUp(1000);



})
