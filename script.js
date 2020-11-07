// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
 

//Variables for each character in the password
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
//https://www.w3schools.com/jsref/jsref_touppercase.asp#:~:text=The%20toUpperCase()%20method%20converts,a%20string%20to%20lowercase%20letters.
var upperCase = lowerCase.toUpperCase();
var numbers = '1234567890'
var specialChar = ' !#$%&()*+,-./:;<=>?@[^_`{|}~';

function generatePassword (){
  var password = '';
  var userChoices = '';

var beginPrompt = prompt('How many characters do you want?');
var passwordLength = parseInt(beginPrompt);

//Checks the length of the password the user has chosen
if (passwordLength <= 8 && passwordLength >=128) {
  alert('Your password must be between 8 and 128 characters')
  generatePassword();

} else {
  var chooseLowerCase = confirm('Do you want to use lowercase letters?');
  var chooseUpperCase = confirm('Do you want to use uppercase letters?');
  var chooseNumbers = confirm('Do you want to use numbers?');
  var chooseSpecialChar = confirm('Do you want to use special characters?');

  //If any of the confirms are answered "ok" they will be added to the array
  if (chooseLowerCase || chooseUpperCase || chooseNumbers || chooseSpecialChar){
    if(chooseLowerCase) userChoices += lowerCase;
    if(chooseUpperCase) userChoices += upperCase;
    if(chooseNumbers) userChoices += numbers;
    if(chooseSpecialChar) userChoices += specialChar;

    console.log(userChoices);

  };
  
}
};

// var mincharCount = prompt("How many characters would you like?");
//   if (value > 128 || value < 8)
//     alert("Your password must be between 8 and 128 characters")
//     else (
//     (value > 128 || value < 8)
//       alert("Your password must be between 8 and 128 characters")
//   )

// var lowerCase = confirm("Would you like to include lowercase letters?");
// var upperCase = confirm("Would you like to include uppercase letters?");
// var includeNum = confirm("Would you like to include numbers?");
// var includeSpecial = confirm("Would you like to include special characters?"); 


// // How to generate the password - https://net-comber.com/charset.html for reference of unicode




// function lowerCase () {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }
    
// function upperCase () {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// function includeNum () {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

// function includeSpecial  () {
//   var special = "!@#$%^&*(){}[]=<>/,.|~?";
//   return special[Math.floor(Math.random()*Symbol.length)];
//     }

//     console.log(includeSpecial.toString()); 
// //This will store this info from the above functions

// const randomGenerator = {
//   lower : lowerCase,
//   upper : upperCase,
//   number : includeNum
 

// };




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

