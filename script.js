// Assignment Code
var getSpecialCharacters = ["!", "@", "#", "^", "&", "*", "%", "+", "=",];
var getRandomLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var getRandomUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var getRandomNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var allCharacters = [getSpecialCharacters, getRandomLower, getRandomUpper, getRandomNumber];
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var numberCharacters = prompt("How many characters would you like your password to contain?")
  if (numberCharacters > 8 && numberCharacters < 128) {
    var getSpecialSymbol = confirm("Do you want speacial characters?")
    var getRandomNumber = confirm("Do you want numerical characters?")
    var getRandomUpper = confirm("Do you want uppercase characters")
    var getRandomLower = confirm("Do you want lowercase characters")



    var password = generatePassword(numberCharacters, getSpecialSymbol);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  } else {
    alert("Please use between 8 and 128 characters")
  }
  if { 

  }


}

function generatePassword(characters, hasSpecialSymbol) {
  console.log("generate password!")
  console.log(characters)
  console.log(hasSpecialSymbol)
  if (hasSpecialSymbol) {
    console.log(getSpecialCharacters[8])
  }
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
