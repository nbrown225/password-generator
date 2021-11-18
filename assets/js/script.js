// Assignment code here
// array for alphabet
// array for 0-9
// array for special characters 

const lowerCaseAlpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const upperCaseAlpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const symbols = ["@","!", "#", "$", "%", "^", "&", "*"];

// prompt would you like to create a password //

var generate = confirm("Are you ready?");
if(generate) {
    prompt(<select>lowerCaseAlpha</select>)
}
   
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
