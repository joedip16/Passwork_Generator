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
    console.log(numberCharacters)


    var password = generatePassword(numberCharacters, getSpecialSymbol);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  } 
  else {
    alert("Please use between 8 and 128 characters")
  }
  

  }
  for (var i = 0; i < getRandomUpper.length; i++) {
    var getRandomUpper = Math.floor(Math.random() * 10) +1;
    console.log(getRandomUpper)
  }





function generatePassword(characters, hasSpecialSymbol, ) {
  console.log("generate password!")
  console.log(characters)
  console.log(hasSpecialSymbol)
  if (hasSpecialSymbol) {
    console.log(getSpecialCharacters[8])
  }
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//store an array of lowercase characters in a variable
//store and array of numeric characters in a variable
//store an aray of upper cae chars in a variable
//store an array of special chars ina  variable

//function to prompt the user for theri password options
  //variable to store the length of the password
  //conditional statement to check if the password length is a true number
  //chek to see if the password is at least 8 chars and less than 128
  //need 4 confirms to check what chars user would like to use in the password
  //conditional statement to check if user does not include anytypes of chars the generation will end
  
  //create an object to store user input


  //function for getting a random element from an array

  //