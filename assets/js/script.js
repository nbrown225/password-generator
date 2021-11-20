// functions needed for number of characters
// nubers
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
// test results
console.log(randomNumber());
console.log(randomLower());
console.log(randomUpper());
console.log(randomSymbol());
// event listener for numbers
// lowercase
// uppercase
// special symbol

// condition that you must click on one of the options

// event listener for gennerate password button click
    // when clicked, password is displayed in "your secure pw" field
