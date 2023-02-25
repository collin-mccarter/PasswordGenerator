// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength = 8;

// created generate password function
function generatePassword() {

  passwordLength = parseInt(prompt("How many characters do you want the password to be? (At least 8, no more than 128 characters)")); {
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Password must be at least 8 characters and no more than 128 characters");
      return false;
    }
   }
   
   let passwordLowercase = confirm("Would you like lowercase characters included in your password?"); {
    if (passwordLowercase) {
      console.log("yes lc") // if they click ok
    } else {
      console.log("no lc") // if they click no
    }
   }
   
   let passwordUppercase = confirm("Would you like uppercase characters to be included in your password?"); {
    if (passwordUppercase) {
      console.log("yes uc")
    } else {
      console.log("no uc")
    }
   }

   let passwordNumbers = confirm("Would you like numbers to be included in your password?"); {
    if (passwordNumbers) {
      console.log("yes numbers")
    } else {
      console.log("no numbers")
    }
   }

   let passwordSpecialCharacters = confirm("Would you like special characters to be included in your password?"); {
    if (passwordSpecialCharacters) {
      console.log("yes special characters")
    } else {
      console.log("no special characters")
    }
   }

  return "generated password will go here" // store password as a variable and then call variable
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; // displays password on the screen

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
