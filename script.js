// Assignment Code

  // Prompt user for password criteria
  // 1) Password length between 8 and 128 charaters.  2) Should include: lowercase, uppercase, numbers and special charaters
  // Validate input
  // Gererate password based on criteria



var generateBtn = document.querySelector("#generate");

function generatePassword(useUpperCase, useLowerCase, useNum, useSpecial, passwordLen) {

  // set of charaters to use

  let upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'S', 'Y', 'Z'];
  let lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 's', 'y', 'z'];
  let number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let specchar = ['~', '`', '!', '@', '#', '$', '%', '%', '^', '&', '*'];

  // lenLower = lower.length;
  // lenUpper = upper.length;
  // lenNumber = number.length;
  // lenSpecialChar = specchar.length;

  charactersToUse = [];
  console.log(charactersToUse);  

  // 'push' to append an item to end of the array

  if (useUpperCase == true) {
    charactersToUse.push(...upper);
  }
  if (useUpperCase == true) {
    charactersToUse.push(...lower);
  }
  if (useUpperCase == true) {
    charactersToUse.push(...number);
  }
  if (useUpperCase == true) {
    charactersToUse.push(...specchar);
  }
  console.log(charactersToUse);
  // need to get the length of the 'charactersToUse array to get random elements from the array

  numberOfCharaters = charactersToUse.length;
  password = ''

  for (let i=0; i < passwordLen; i++) {
  randomCharValue = Math.floor(Math.random() * numberOfCharaters)
  console.log(randomCharValue);
  randomChar = charactersToUse[randomCharValue]
  //password += randomChar
  }

  console.log(password);
  writePassword(password);
}

// Password length between 8 and 128 charaters.

function userInput() {
  let passwordLen = window.prompt('Input Password Length');
  let success = true;
  if (passwordLen <= 7) {
    window.alert('Password must be a minimum of 8 charaters');
    success = false;
  } else {
    if (passwordLen >= 129) {
      window.alert('Password cannot be longer that 128 charaters');
      success= false;
    }
  }
  if (success == true){
    var useUpperCase = window.confirm("Would you like to include upper case letters?");
    var useLowerCase = window.confirm("Would you like to include lower case letters?");
    var useNum = window.confirm("Would you like to include numbers in your password?");
    var useSpecial = window.confirm("Would you like to include special characters in your password?");

    if (useUpperCase == false && useLowerCase == false && useNum == false && useSpecial == false) {
      window.alert("You must select at least one character type");
      success = false;
    }
  }
  if (success == true) {
    generatePassword(useUpperCase, useLowerCase, useNum, useSpecial, passwordLen);
  }
}
// Write password to the #password input
function writePassword() {  
var passwordText = document.querySelector("#password");
  // var password = generatePassword();
  passwordText.value = password;
}

var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", userInput);
