// Assignment code here
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var lower = alphabet.split("");
var upper = alphabet.toUpperCase().split("");
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var special = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']



function generatePassword() {
  // get length of password
  var passwordLength = window.prompt("How long would you like your password?:")
  if (passwordLength == null) {
    return;
  }else if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please make your password bewteen 8 and 128 characters")
    generatePassword();// calls starting funciton again if password is too long or too short
  }
  // Lowercase?
  var userLower = window.confirm("Would you like your password to have:  Lowercase letters?")
  // Uppercase?
  var userUpper = window.confirm("Would you like your password to have:  Uppercase letters?")
  // Numbers?
  var userNumber = window.confirm("Would you like your password to have:  Numbers?")
  // Special characters?
  var userSpecial = window.confirm("Would you like your password to have:  Special characters?")
  // If no types are selected, tell user they need to select at least one type, then call function again
  if (userLower === false && userUpper === false && userNumber === false && userSpecial === false) {
    window.alert("Please select at least one type of character")
    generatePassword();
  }

  // Here we make an array of all the possible characters
  var characters = []; 
  if(userLower) {
    characters = characters.concat(lower);
  }
  if(userUpper) {
    characters = characters.concat(upper);
  }
  if(userNumber) {
    characters = characters.concat(number);
  }
  if(userSpecial) {
    characters = characters.concat(special)
  }

  var newPassword = '';

  console.log(characters)

  for (var i = 0; i < passwordLength; i++) {
    newPassword += characters[Math.floor(Math.random() * characters.length)]
  }
  console.log(newPassword)
  return newPassword;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
