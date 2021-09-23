// defines generateBtn variable as the contents of the 1st element of id=generate, which is the generate password button
var generateBtn = document.querySelector("#generate");
// 

//instantiates Password variable to prevent empty string output to user
//var password = "";

// excluded space " " as an special character option for better password usability & readability
var poolSpecial = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<",">","=","?","@","[","]","/","^","_","`","{","}","~"];
var poolNum = ["0","1","2","3","4","5","6","7","8","9"];
var poolLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var poolUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// Empty array that will act as bucket for all potential characters for password creation, as determine by user prompts
var pool = [];

// Function to generate random password based on user input
function generatePassword() {
  // User prompted to choose how many characters are in generated password
  var passwordLength = prompt("In the range of 8 to 128 characters, how many characters would you like your password to contain?");
  /* This if statement validates that user submission for length is a numerical value. If isNaN returns false, then value is a number. */
  if (isNaN(passwordLength)) {
    alert("Password length must be a number between 8 and 128.");
    return generatePassword();
  } else if (passwordLength >= 8 && passwordLength <= 128) {
  /* Alerts user if doesn't meet the minimum or maximum character count constraint */
  } else if (passwordLength > 128) {
    alert("Password can include a maximum of 128 characters.");
    return generatePassword();
  } else if (passwordLength < 8) {
    alert("Password must include at least 8 characters.");
    return generatePassword();
  }


  // User prompted to choose if they want special characters in generated password
  var charsSpecial = confirm("Click OK to confirm including special characters.");
  if (charsSpecial === true) {
    pool.push(...poolSpecial);
  }

  // User prompted to choose if they want numbers in generated password
  var charsNum = confirm("Click OK to confirm including numeric characters.");
  if (charsNum === true) {
    pool.push(...poolNum);
  }

  // User prompted to choose if they want uppercase characters in generated password
  var charsLower = confirm("Click OK to confirm including lowercase characters.");
  if (charsLower === true) {
    pool.push(...poolLower);
  } 

  // User prompted to choose if they want uppercase characters in generated password
  var charsUpper = confirm("Click OK to confirm including uppercase characters.");
  if (charsUpper === true) {
    pool.push(...poolUpper);
  } 

  //Alerts if user hasn't selected at least 1 character option
  if (charsSpecial === false && charsNum === false && charsLower === false && charsUpper === false) {
    alert("You must choose at least one character type to ensure a secure password. Please try again.");
  }
  
  //for loop to iterate through all values in the pool array, containing all character options for generated password
  for (var i = 0; i <= passwordLength; i++) {
    // var letter = pool[Math.floor(Math.random() * pool.length)];
    // password.concat("a");
    password.concat(pool[Math.floor(Math.random() * pool.length)]);
  }
  console.log(password);
  return password
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
