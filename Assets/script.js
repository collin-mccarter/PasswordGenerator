// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; // lowercase values
var uppercaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']; // uppercase values
var numbersArray = ['0','1','2','3','4','5','6','7','8','9']; // all possible numbers
var specialCharactersArray = ['!','"','#','$','%','&',"'",'(',')','*','+','-','.','/',':',';','<','=',">",'?','@','^','_','`','{','|','}','~']; // all special characters

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // on button click -> execute writePassword

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // executes generatePassword function
  var passwordText = document.querySelector("#password"); // adds passwordText in the body under id = password

  passwordText.value = password; // displays password on the screen
}

// created generate password function
function generatePassword() {
  var choiceArray = []; // setting up blank array for data to be added to

  // first prompt to determine password length
    passwordLength = parseInt(prompt("How many characters do you want the password to be? (At least 8, no more than 128 characters)")); {
    // making sure password length is a reasonable number/length
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Password must be at least 8 characters and no more than 128 characters");
      return false;
    }
   }
   
    // asking if lc characters should be included in password
   let passwordLowercase = confirm("Would you like lowercase characters included in your password?"); {
    if (passwordLowercase) { // if yes is clicked
      console.log(choiceArray = choiceArray.concat(lowercaseArray)); // visually see lowercase characters added to modified choiceArray
    }
   }
   
   // asks if you want to add uppercase characters
   let passwordUppercase = confirm("Would you like uppercase characters to be included in your password?"); {
    if (passwordUppercase) { // if yes 
      console.log(choiceArray = choiceArray.concat(uppercaseArray)); // adds uppercase to the choiceArray
    } 
   }

   // asks if you want to add numbers to password
   let passwordNumbers = confirm("Would you like numbers to be included in your password?"); {
    if (passwordNumbers) { // if yes
      console.log(choiceArray = choiceArray.concat(numbersArray)); // adds numbers to choice array
    }
   }

   // asks if you want to add special characters to the password
   let passwordSpecialCharacters = confirm("Would you like special characters to be included in your password?"); {
    if (passwordSpecialCharacters) { // if yes
      console.log(choiceArray = choiceArray.concat(specialCharactersArray)); // adds special characters to choice array
    }
   }

   var password = '' // presets password variable

   // Random password for loop
   for (i = 0; i < passwordLength; i++) {
    var randomLetter = Math.floor(Math.random() * choiceArray.length);  
    password = password + choiceArray[randomLetter];
   }

    // console.log(password) // logs the password so I can see if it outputs correctly

    if (password === undefined) {
      return console.log("help");
    } else {
      return password; // store password as a variable
    }
}

