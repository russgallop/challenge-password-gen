// Assignment Code

  // Prompt user for password criteria
  // 1) Password length between 8 and 128 charaters.  2) Should include: lowercase, uppercase, numbers and special charaters
  // Validate input
  // Gererate password based on criteria



var generateBtn = document.querySelector("#generate");

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
  

  if (useUpperCase == ture) {
    charactersToUse.push(...upper);
  }

  if (useUpperCase == ture) {
    charactersToUse.push(...lower);
  }

  if (useUpperCase == ture) {
    charactersToUse.push(...number);
  }

  if (useUpperCase == ture) {
    charactersToUse.push(...specchar);
  }

  console.log(charactersToUse);

  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
