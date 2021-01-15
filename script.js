// Assignment Code
// added var functions
//added variables
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyx";
var numbers = "0123456789";
var specialChar = "!@#$%^&*()?/;:~";

//added userSelection & finalPassword var
var userSelection =[]; 

var finalPassword = [];

//added functions, prompt, console.log
function generatePassword() { 

  
  var passLength = prompt("Please insert a number between 8 to 128");
  //remmeber to add a condition where IF  the user choose less than 8 or greater than 128 to stop and alert them to follow intsruction. Then ask initial question again 
  if (passLength <8 ) {
    alert ("Please insert a number between 8 to 128");
    return;
  }
  if (passLength >128 ) {
  alert ("Please insert a number between 8 to 128");
  return;
  }
  
  //added upperCase/lowerCase confirm var
  var upperC = confirm("Would you like Uppercase Letters");
  if(upperC) {
    userSelection.push(upperCase);
  } 
  
  var lowerC = confirm("Would you like Lowercase Letters");
  if(lowerC) {
    userSelection.push(lowerCase);
  }
  //added remaining specChar and numb var
  var specC = confirm("Would you like and Special Characters");
  if(specC) {
    userSelection.push(specialChar);
  }

  var numb = confirm("Would you like to add Numbers to your password?"); 
  if(numb) { 
    userSelection.push(numbers);
  }
  console.log("user selection = " + userSelection);

  //added if statement) NEED definition of what this is doing
  if (userSelection.length ===0);
  return;

  // for loop with random index to create random char 
  for (var i = 0; i < userSelection; i++) {
    var randomIndex = Math.floor(Math.random() * userSelection.length);
    var random = userSelection.charAt(randomIndex);
  }

  //var math.floor will pick a random index for userSelection array set to var
  //math.floor to pick random char  --name as var use this to concat
}

  


  // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);






//create for loop to choose password characters for(var i = 0; i <=passwordLength; i++)
