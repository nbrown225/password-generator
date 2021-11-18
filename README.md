# password-generator

### learned terms
display: grid;
  grid-template-columns: auto auto;
  rem sizing
  
  
  ### RESOURCES
  https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
  

  
// listener//

   
// how many charactors would you like it to be 8-128
    // prompt to let them choose the number
// prompt would you like to include numbers?
    // yes/no
// prompt would you like special characters?
    // yes/no
// password has been created
    // prompt to copy password

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
const lowerCaseCodes = arrayFromLowToHigh(65, 90)
const upperCaseCodes = arrayFromLowToHigh(97, 122)
const numberCodes = arrayFromLowToHigh(48, 57)