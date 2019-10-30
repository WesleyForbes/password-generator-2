var charType = ["special", "numeric", "lowercase", "uppercase"];

var characters = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz"; 
var numeric = "1234567890";
var special = "#$%&'()*+,-./:;<=>?@[]^_`{|}~";


var userType = prompt("Choose a character type! Your options are; special, numeric, lowercase and uppercase.");

var userLength = prompt("choose a password length between 8 and 128 characters");



if(userType == "special"){
  var passwordString = special;
}
if(userType == "numeric"){
  var passwordString = numeric;
}
if(userType == "lowercase"){
  var passwordString = lowerCase;
}
if(userType == "uppercase"){
  var passwordString = characters;
}
var password = "";


for (var i = 0, n = passwordString.length; i < userLength; i++) {
  password += passwordString.charAt(Math.floor(Math.random() * n));
}



alert(password);