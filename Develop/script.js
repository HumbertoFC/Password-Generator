// Assignment Code
var userChoice;

var lowerCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var symbol = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', ',', '+', '-', '.', '/', '<', '>', '?', '~']
var userChoiceArray = [lowerCharacters, upperCharacters, num, symbol]

function charactersSelected(userChoice, lower, upper, number, sym) {
  var password = ""

  for (var i = password.length; password.length < userChoice; i++) {
    if (lower && password.length < userChoice) {
      var index = Math.floor(Math.random() * lowerCharacters.length)

      password = password + lowerCharacters[index]
      
    }
    if (upper && password.length < userChoice) {
      var index = Math.floor(Math.random() * upperCharacters.length)

      password = password + upperCharacters[index]
    }
    if (number && password.length < userChoice) {
      var index = Math.floor(Math.random() * num.length)

      password = password + num[index]
    }
    if (sym && password.length < userChoice) {
      var index = Math.floor(Math.random() * symbol.length)

      password = password + symbol[index]
    }
    else if ( sym=== false && number===false && upper===false && lower === false) {
      return password
    }
  }




  return password;
}


// confirm('would you like lowercase characters?')
// confirm('would you like Uppercase characters?')
// confirm('would you like Numerics characters?')
// confirm('would you like special or symbols characters?')


var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var password = ""
  var userChoice = prompt('how many characters would you like this password to have?')
  alert(`Your password will have ${userChoice} characters`)
  if (userChoice > 7 && userChoice < 129) {
    var lower = confirm('would you like lowercase characters?')
    var upperCharacters = confirm('would you like uppercase characters?')
    var num = confirm('would you like numeric characters?')
    var symbol = confirm('would you like special or symbols characters?')
  } else {
    alert('Password needs to be between 8 and 128 characteres ')
    alert('If you want to try again, please click generate password again!')
    return password

  }
  var password = ""
  password = charactersSelected(userChoice, lower, upperCharacters, num, symbol)
  return password

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(password)
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);