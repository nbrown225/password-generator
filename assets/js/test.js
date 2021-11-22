// Assignment code here
// array for alphabet
// array for 0-9
// array for special characters 
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const specialCharacterEl = document.getElementById('symbolChar');
const generateEl = document.getElementById('generate');
const passwordEl = document.getElementById('password');

function lowerCaseCodes() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// when called, this will return random letters, numbers and symbols
function upperCaseCodes() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function numberCodes() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48); 
}

function symbolChar() {
    const symbols = '!@#$%^&*<>'
    return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(symbolChar());
console.log(numberCodes)
console.log(upperCaseCodes)
console.log(lowerCaseCodes)

const randomFunction = {
    lower: lowerCaseCodes,
    upper: upperCaseCodes,
    number: numberCodes,
};

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSpecialChar = specialCharacter;

    resultEl.innerText = generatePassword(
        hasLower,
        hasUpper,
        hasNumber,
        hasSpecialChar,
        length,
    );
});
function generatePassword(lower, upper, number, specialChar, length) {
    
}
//const lowerCaseAlpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//const upperCaseAlpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//const symbols = ["@","!", "#", "$", "%", "^", "&", "*"];
//learned after completing that i can create an array using char codes

