# password-generator
## Project description
This project is to create a random password generator.

## Table of Contents
- [password-generator](#password-generator)
  - [Project description](#project-description)
  - [Table of Contents](#table-of-contents)
  - [Password Generater Link](#password-generater-link)
  - [Screenshot](#screenshot)
  - [Requirements](#requirements)
  - [RESOURCES](#resources)
  - [issues](#issues)
  - [learned terms](#learned-terms)
## Password Generater Link
[Click me!](https://nbrown225.github.io/password-generator/)


## Screenshot
![Alt text](assets\screenshots\PasswordGenerator.png)"Finished Product")

## Requirements
- Presented with selectable criteria to generate the password
  - I used a ```<form>``` to contain the criteria for the password

- Password length should be selectable from 8-128
  - Used ```<input type="number" min="8" max="128" value="50">``` to create a minimum, max and set the bar to a default value
  
- Character types include lowercase, uppercase, numeric, and special characters
  - Used ```<label>``` to create an option for each option and added ```<input type="checkbox">``` to let the user just check it off if they want it
  
- At least one item in the criteria must be selected in order to generate password

- When finished filling out criteria, password will generate

- When password is generated, it displays on the page

## RESOURCES
- For CharCodes https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
- For random characters functions https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
- Dom  elements https://www.w3schools.com/js/js_htmldom_elements.asp
 
## issues
I understand creating each separate part of the password generator, but am having trouble putting them all together. I looked everywhere and asked peole for help. But when writing the code myself, I can't quite grasp putting them all together to get the values from the checked criteria and generate the password. 

## learned terms
creating random functions for criteria
```(Math.floor(Math.random() * 25) +97);```
  
  
  