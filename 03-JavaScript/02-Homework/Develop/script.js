// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  const textArea = document.getElementsByTagName('textarea')[0];


  textArea.value = 'This is a test';
  console.log(textArea);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
