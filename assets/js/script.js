// Assignment code here

// dom elements
const resultEl = document.getElementById('result');
const charLengthEl = document.getElementById('charLength');
const numbersEl = document.getElementById('number');
const lowerEl = document.getElementById('lower');
const upperEl = document.getElementById('upper');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById("generate");
const passwordEl = document.getElementById('password');

function testlength(length, value) {
    console.log(value)
}
const charLength = charLengthEl.value;
const hasNumber = numbersEl.checked;
const hasLower = lowerEl.checked;
const hasUpper = upperEl.checked;
const hasSymbol = symbolEl.checked;

// object for random functions
const randomFuncs = {
   number: randomNumber,
   lower: randomLower,
   upper: randomUpper, 
   specialChar: randomSymbol
};

generateEl.addEventListener('click', () => {
  
})

function randomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
// lowercase
function randomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// uppercase
function randomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// special symbol
function randomSymbol() {
    return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}


// test the results
console.log(randomNumber());
console.log(randomLower());
console.log(randomUpper());
console.log(randomSymbol());

// condition that you must click on one of the options
// event listener for gennerate password button click
//function generatePassword() {
  //  alert("test")
  //}
    // when clicked, password is displayed in "your secure pw" field
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  