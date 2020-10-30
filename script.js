var specialChars = ["!", "@", "#", "^", "&", "*", "%", "+", "="];
var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characters = [];
var userPassword = "";
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  var confirmSpecial;
  var confirmLower;
  var confirmUpper;
  var confirmNumber;

  var numberCharacters = prompt("How many characters would you like your password to contain?")
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

if(confirmSpecial === false && confirmNumber === false && confirmUpper === false && confirmLower === false) {
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

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);