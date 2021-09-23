// defines generateBtn variable as the contents of the 1st element of id=generate, which is the generate password button
var generateBtn = document.querySelector("#generate");

// 

// excluded space " " as an special character option for better password usability & readability
var poolSpecial = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<",">","=","?","@","[","]","/","^","_","`","{","}","~"];
var poolNum = ["0","1","2","3","4","5","6","7","8","9"];
var poolLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var poolUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// Empty array that will act as bucket for all potential characters for password creation, as determine by user prompts
var poolGlobal = [];

// Function for user to define password length
function generatePassword() {
  var charsLength = prompt("In the range of 8 to 128 characters, how many characters would you like your password to contain?");
  /* This if statement validates that user submission for length is a numerical value. If isNaN returns false, then value is a number. */
  if (isNaN(charsLength)) {
    alert("Password length must be a number between 8 and 128.");
  } else if (charsLength >= 8 && charsLength <= 128) {
  /* Alerts user if doesn't meet the minimum or maximum character count constraint */
  } else if (charsLength > 128) {
    alert("Password can include a maximum of 128 characters.");
  } else if (charsLength < 8) {
    alert("Password must include at least 8 characters.");
  }


// if i add return generatePassword(); to each constraint violation then the user doesn't exit the generation flow, BUT also cannot exit the flow. do i need to add something like below as well? "" is for safari compatibility
// if (passwordLength === null || passwordLength === "")
// example:
// } else if (passwordLength > 128) {
//   alert("Password can include a maximum of 128 characters.");
//   return generatePassword();
// }


  var charsSpecial = confirm("Click OK to confirm including special characters.");
  if (charsSpecial=true) {
    console.log("yeehaw Special characters");
  }
  var charsNum = confirm("Click OK to confirm including numeric characters.");
  if (charsNum=true) {
    console.log("yeehaw Numeric characters");
  }
  var charsLower = confirm("Click OK to confirm including lowercase characters.");
  if (charsLower=true) {
    console.log("yeehaw Lowercase characters");
  } 
  var charsUpper = confirm("Click OK to confirm including uppercase characters.");
  if (charsUpper=true) {
    console.log("yeehaw Uppercase characters");
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
