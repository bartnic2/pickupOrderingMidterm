
function randomString(){
  let characters = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let randomString = "";
  for(var i = 1; i < 7; i++){
    let randomNum = Math.floor((Math.random() * 61));
    randomString += characters[randomNum];
  }
  return randomString;
}

module.exports = randomString


