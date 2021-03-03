// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generate Password Code

generateBtn.addEventListener("click", writePassword);
function generatePassword() {
  var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numberschoice = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var characterschoice = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

  var result = [];
  var userinput = [];

  var HowmanyCharc = prompt("Number of Characters (8-128");
  var numbers = confirm("Include numbers?");
  var uppercases = confirm("Include uppercase letters?");
  var lowercases = confirm("Include lowercase letters?");
  var characters = confirm("Include special characters?");

  // If statements for arrays

  if (uppercases) {
    result = result.concat(uppercaseLetters);

  }

  if (lowercases) {
    result = result.concat(lowercaseLetters);

  }

  if (numbers) {
    result = result.concat(numberschoice);

  }

  if (characters) {
    result = result.concat(characterschoice);
  }
  console.log(result)


  //Math

  for (var i = 0; i < HowmanyCharc; i++) {

    userinput.push(result[Math.floor(Math.random() * result.length)]);
  }

  return userinput.join("");
}