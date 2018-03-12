$(document).ready(function() {

  let total = 0;
  //Food added will list hyphenated names of foods, used as classes that ID particular rows.
  let foodAdded = [];
  let tempFood1 = [];
  let tempFood2 = [];
  let foodconcat = [];
  let finalOrder = {};
  let user = $('.user').text();
  let data = "empty";
  console.log("INITIAL USER", user);

  function getData(){
    $.get("/data").done(function(res){
        $('.customer-msg').css("visibility", "visible");
        data = res;
        if(data === 'empty'){
          setTimeout(getData, 3000);
        } else {
        let timeLeft = Number(data)
        console.log("data:", data);
        console.log("timeleft", timeLeft);
        deliveryTime();
         function deliveryTime(){
           let time = `Your order will be available in ${timeLeft} minutes`;
           $('#pickup_time').text(time)
             timeLeft -= 1
             if(timeLeft >= 0){
               setTimeout(deliveryTime, 60000);
             }else{
              $('#pickup_time').text("Your order is ready!");
             }
           }
        }
      })
    }


  //Stripe code (some modifications from website)
  var handler = StripeCheckout.configure({
    key: 'pk_test_smuoXQ6EbRTtv8FGOfpbnhzc',
    image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
    locale: 'auto',
    token: function(token) {
      // You can access the token ID with `token.id`.
      // Get the token ID to your server-side code for use.
      // You can ONLY send the token, so to include restaurant data, you need to add it manually.
      // Also, the tokens object won't accept objects as values.

      //$() slide toggle down for purchase
      token.order = {};
      for(let foodname of foodAdded){
        token.order[foodname] = +$(`.${foodname}`).find('.order-quantity').val();
      }
      token['restaurant_email'] = $('.restaurant_email').text();
      token['restaurant_phone'] = $('.restaurant_phone').text();
      token['new_user'] = user;

      $.post("/charge", token).done(function (res){
        console.log(res);
      })

      getData();
      }
  });

  document.getElementById('customButton').addEventListener('click', function(e) {
    // Open Checkout with further options:
    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      currency: 'cad',
      amount: total*100
    });
    e.preventDefault();

  });

  // Close Checkout on page navigation:
  window.addEventListener('popstate', function() {
    handler.close();
  });
  //Code below manages the adding of items to the cart:

  function setTotal(){
    total = 0;
    for(let fooditem of foodAdded){
      total += +$(`.${fooditem}`).find('.order-total').text().slice(1);
    }
    $('.cart-total').text(`$${total}`);
    $('#strID').data('amount', `${total}`)
  }

  function setChange(){
    $('.order-quantity').on('change', function (event){
      let newquant = +$(this).val();
      let price = +$(this).closest('tr').find('.order-price').text().slice(1);
      $(this).closest('tr').find('.order-total').text(`$${price*newquant}`);
      setTotal();
    })
  }

  //Deleting a food item from your order list before it's submitted
  function setRemove(){
   $(".remove-button").on("click", function (event){
      // event.preventDefault()
      let name = $(this).closest('tr').find('.order-name').text();
      let noSpaceName = name.split(' ').join('-');
      for(index in foodAdded){
        if(foodAdded[index] === noSpaceName){
          tempFood1 = foodAdded.slice(0, index);
          tempFood2 = foodAdded.slice(index + 1);
          foodconcat = tempFood1.concat(tempFood2);
          foodAdded = foodconcat;
        }
      }
      setTotal();
      $(this).closest('tr').remove();
    })
  }

  //user adding a food item to the food list from the menu page
  $(".add-button").on("click", function (event){
    event.preventDefault();
    let cost = +$(this).closest('tr').find('.food-price').text();
    let name = $(this).closest('tr').find('.food-name').text();
    let ordername = $('.cart-body').find('.order-name').text();
    let noSpaceName = name.split(' ').join('-');
    if(!foodAdded.includes(noSpaceName)){
      let newline = $('.order-line').clone();
      newline.css('visibility', 'visible');
      newline.attr('class', `${noSpaceName}`);
      newline.find('.order-price').text(`$${cost}`);
      newline.find('.order-name').text(name);
      newline.find('.order-quantity').val(1);
      newline.find('.order-total').text(`$${cost}`);
      newline.prependTo('.cart-body');
      foodAdded.push(noSpaceName);
      setChange();
      setRemove();
      setTotal();
    }
  })
   $("#confirmation-window").slideUp(1000);
})
