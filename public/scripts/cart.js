$(document).ready(function() {
  //Food added will list hyphenated names of foods, used as classes that ID particular rows.
  let foodAdded = [];
  let tempFood1 = [];
  let tempFood2 = [];
  let foodconcat = [];

  function setTotal(){
    let total = 0;
    for(let fooditem of foodAdded){
      total += +$(`.${fooditem}`).find('.order-total').text().slice(1);
    }
    $('.cart-total').text(`$${total}`);
    $('#strID').data('amount', `${total}`)
  }

  function setChange(){
    $('.order-quantity').on('change', function (event){
      console.log('hello');
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
    let increment = 1;
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
      increment++;
      foodAdded.push(noSpaceName);

      setChange();
      setRemove();
      setTotal();
    }

  })

})
