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
