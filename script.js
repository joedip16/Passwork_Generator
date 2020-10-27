// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var numberCharacters = prompt("How many characters would you like your password to contain?")
  passwordText.value = password;

}
function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
function getRandomSymbol(){
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(getRandomSymbol());

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
