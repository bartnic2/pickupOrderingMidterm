//When importing a file, you have to use ./
dbfunctions = require("./dbfunctions.js");


//Function 1:
// dbfunctions.getAllItems().then(function(rows){
//   console.log(rows);
// });

//Function 2:
// dbfunctions.getAllCustomerData("John Wayne")
// .then(function(rows){
//   console.log(rows);
// })
// .catch(function(err){
//   console.log(err);
// });

//Function 3:
// dbfunctions.getRestaurantLoginData("Steak and Fries")
// .then(function(rows){
//   console.log(rows);
// })
// .catch(function(err){
//   console.log(err);
// });

//Function 4:
// dbfunctions.getRestaurantLoginData("Steak and Fries")
// .then(function(rows){
//   console.log(rows);
// })
// .catch(function(err){
//   console.log(err);
// });

//Function 5:
// dbfunctions.getRestaurantData("Steak and Fries")
// .then(function(rows){
//   console.log(rows);
// })
// .catch(function(err){
//   console.log(err);
// });

//Function 6:
dbfunctions.getAllRestaurantItems("Steak and Fries")
.then(function(rows){
  console.log(rows);
})
.catch(function(err){
  console.log(err);
});
