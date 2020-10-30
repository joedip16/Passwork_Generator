// Assignment Code

var specialChars = ["!", "@", "#", "^", "&", "*", "%", "+", "=",];
var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characters = [];
var userPassword = "";
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  console.log("generate password!")
  var confirmSpecial;
  var confirmLower;
  var confirmUpper;
  var confirmNumber;

  var numberCharacters = prompt("How many characters would you like your password to contain?")
  console.log(numberCharacters)
  if (numberCharacters > 7 && numberCharacters < 129) {
    confirmSpecial = confirm("Do you want speacial characters?")
    confirmNumber = confirm("Do you want numerical characters?")
    confirmUpper = confirm("Do you want uppercase characters")
    confirmLower = confirm("Do you want lowercase characters")
    
  } else {
    alert("Please use between 8 and 128 Characters!");
    return
  }
  
if (confirmSpecial === true){
  for(var i = 0; i < specialChars.length; i++){
    characters.push(specialChars[i]);
  }
}

if (confirmNumber === true){
  for(var i = 0; i < numbers.length; i++){
    characters.push(numbers[i]);
  }
}

if(confirmUpper === true){
  for(var i = 0; i < upperChars.length; i++){
    characters.push(upperChars[i]);
  }
}

  if(confirmLower === true){
    for(var i = 0; i < lowerChars.length; i++){
      characters.push(lowerChars[i]);
  }
}

if(confirmSpecial === false, confirmNumber === false, confirmUpper === false, confirmLower === false) {
  alert("You must chose at least one type of character!")
  return
}

for(var i = 0; i < numberCharacters; i++){
  var index = Math.floor(Math.random() * characters.length);
  userPassword = userPassword + characters[index];
  }
console.log(confirmSpecial)
console.log(confirmNumber)
console.log(confirmUpper)
console.log(confirmLower)
console.log("--------------")
console.log(numbers)
console.log(specialChars)
console.log(lowerChars)
console.log(upperChars)
console.log("--------------")
console.log(characters)
console.log(userPassword)



return userPassword;



  //first pass
  //ask users for the length of the password
  //check the minimun length of password
  //if pass, ask user for their special character sets, save response to their varialbe 
  //go through users confirm and include character sets of users choice into the pool of values character sets
  //generate random number for the pool of characters inside loop
  //include index using random number into the final passowrd inside loop
  //return
  

  //second pass
  //inlucde minimum of one character from the character sets

}





// Assignment Code


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

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
