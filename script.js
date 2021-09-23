// Assignment Code

// defines generateBtn variable as the contents of the 1st element of id=generate, which is the generate password button
var generateBtn = document.querySelector("#generate");

// Function for user to define password length
function generatePassword() {
  var passwordLength = prompt("In the range of 8 to 128 characters, how many characters would you like your password to contain?");
  /* This if statement validates that user submission for length isn't null and is a number. If isNaN returns false, the value is a number. */
  if (isNaN(passwordLength) || (passwordLength=null)) {
    alert("Password length must be a number between 8 and 128.");
  } else if (passwordLength >= 8 && passwordLength <= 128) {
  /* Alerts user if doesn't meet the minimum or maximum character count constraint */
  } else if (passwordLength > 128) {
    alert("Password can include a maximum of 128 characters.");
  } else if (passwordLength < 8) {
    alert("Password must include at least 8 characters.");
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// When a user clicks on the #generate element (the Generate Password button), the writePassword function is run
generateBtn.addEventListener("click", writePassword);
