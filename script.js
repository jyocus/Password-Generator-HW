// var mincharCount = 8
// var lowerCase = true
// var upperCase = true
// var includeNum = true
// var includeSpecial = true


// var mincharCount = prompt("How many characters would you like?");
//   // if (value > 128 || value < 8)
//   //   alert("Your password must be between 8 and 128 characters")
//   // else (
//     // (value > 128 || value < 8)
//   //   alert("Your password must be between 8 and 128 characters")
//   )

// var lowerCase = confirm("Would you like to include lowercase letters?");
// var upperCase = confirm("Would you like to include uppercase letters?");
// var includeNum = confirm("Would you like to include numbers?");
// var includeSpecial = confirm("Would you like to include special characters?"); 


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
  var special = "!@#$%^&*(){}[]=<>/,.|~?";
  return special[Math.floor(Math.random()*Symbol.length)];
    }

    console.log(includeSpecial.toString()); 
//This will store this info from the above functions

const randomGenerator = {
  lower : lowerCase,
  upper : upperCase,
  number : includeNum
 

};

// Assignment Code
var generateBtn = document.querySelector("#generate");
 

// Write password to the #password input
function writePassword () {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

