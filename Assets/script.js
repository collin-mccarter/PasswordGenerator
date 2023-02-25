// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength = 8;
var lowercaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbersArray = ['0','1','2','3','4','5','6','7','8','9'];
var specialCharactersArray = ['!','"','#','$','%','&',"'",'(',')','*','+','-','.','/',':',';','<','=',">",'?','@','^','_','`','{','|','}','~'];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; // displays password on the screen

}

// created generate password function
function generatePassword() {
  var choiceArray = [];

  passwordLength = parseInt(prompt("How many characters do you want the password to be? (At least 8, no more than 128 characters)")); {
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Password must be at least 8 characters and no more than 128 characters");
      return false;
    }
   }
   
   let passwordLowercase = confirm("Would you like lowercase characters included in your password?"); {
    if (passwordLowercase) {
      // console.log("yes lc") // if they click ok
      console.log(choiceArray = choiceArray.concat(lowercaseArray));
    }
   }
   
   let passwordUppercase = confirm("Would you like uppercase characters to be included in your password?"); {
    if (passwordUppercase) {
      console.log(choiceArray = choiceArray.concat(uppercaseArray));
    } 
   }

   let passwordNumbers = confirm("Would you like numbers to be included in your password?"); {
    if (passwordNumbers) {
      console.log(choiceArray = choiceArray.concat(numbersArray));
    }
   }

   let passwordSpecialCharacters = confirm("Would you like special characters to be included in your password?"); {
    if (passwordSpecialCharacters) {
      console.log(choiceArray = choiceArray.concat(specialCharactersArray));
    }
   }

   for (i = 0; i < passwordLength; i++) {
    var randomLetter = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomLetter];
   }

  return password; // store password as a variable and then call variable
}

