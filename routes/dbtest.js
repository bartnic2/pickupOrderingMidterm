//When importing a file, you have to use ./
dbfunctions = require("./dbfunctions.js");

//Function 1: Get all restaurant items data

// dbfunctions.getAllRestaurantItems("Steak and Fries")
// .then(function(rows){
//   console.log(rows);
// })
// .catch(function(err){
//   console.log(err);
// });

//Function 2: Get restaurant data (name, address, image locations)

// dbfunctions.getRestaurantData("Steak and Fries")
// .then(function(rows){
//   console.log(rows);
// })
// .catch(function(err){
//   console.log(err);
// });

//Function 3: Get restaurant login data: e-mail and password

// dbfunctions.getRestaurantLoginData("Steak and Fries")
// .then(function(rows){
//   console.log(rows);
// })
// .catch(function(err){
//   console.log(err);
// });

//Function 4: Get all customer data

// dbfunctions.getAllCustomerData("John Wayne")
// .then(function(rows){
//   console.log(rows);
// })
// .catch(function(err){
//   console.log(err);
// });

// Function 5: Get all items for all restaurants

// dbfunctions.getAllItems()
// .then(function(rows){
//   console.log(rows);
// })
// .catch(function(err){
//   console.log(err);
// });

//Function 6: Check for specific customer

// dbfunctions.checkForCustomer("John Wayne")
// .then(function(response){
//   console.log(response);
// })
// .catch(function(err){
//   console.log(err);
// })

//Function 7: Set restaurant items
// Note - I don't know what happens if an incorrect key is entered. I think it might create it that key...

// dbfunctions.setRestaurantItems(1, {price: "7.00"})
// .then(function(response){
//   console.log(response);
// })
// .catch(function(err){
//   console.log(err);
// })

//Function 8: Store orders
// Data will come in the following form: customer_id, {item_id1: quantity1, item_id2: quantity2, ...}
// total, [customer_id, restaurant_id], {item_id1: quantity1, item_id2: quantity2, ...}

// dbfunctions.enterOrderData(30.00, [1, 1], {1: 3, 2: 2})
// .then(function(response){
//   console.log(response);
// })
// .catch(function(err){
//   console.log(err);
// })

//Function 9: Retrieve orders

// dbfunctions.retrieveOrderData(1)
// .then(function(response){
//   console.log(response);
// })
// .catch(function(err){
//   console.log(err);
// })
// userInfo = {email_address: "xyz@gmail.com", address: "1234", name: "man", password: "go", phone_number: "123 456 7890"};
// dbfunctions.registerUser(userInfo)
// .then(function(response){
//   console.log(response);
// })
// .catch(function(err){
//   console.log(err);
// })



