// mincharCount = prompt("How many characters would you like?");
// lowerCase = confirm("Would you like to include lowercase letters?");
// upperCase = confirm("Would you like to include uppercase letters?");
// includeNum = confirm("Would you like to include numbers?");
// includeSpecial = confirm("Would you like to include special characters?"); 


// How to generate the password - https://net-comber.com/charset.html for reference of unicode

function lowerCase () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
    
function upperCase () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function includeNum () {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function includeSpecial  () {
  return String.fromCharCode(Math.floor(Math.random() * 15) +33);
    }
// Assignment Code
var generateBtn = document.querySelector("#generate");
 

// Write password to the #password input
function writePassword () {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

console.log(password{i});

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

