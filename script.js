// Assignment Code
// added var functions
//added variables
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyx";
var numbers = "0123456789";
var specialChar = "!@#$%^&*()?/;:~";

//added userSelection & finalPassword var
var userSelection = [];

var finalPassword = [];

//added functions, prompt, console.log
function generatePassword() {
  
  var passLength = prompt("Please insert a number between 8 to 128");
  //remmeber to add a condition where IF  the user choose less than 8 or greater than 128 to stop and alert them to follow intsruction. Then ask initial question again 
  
  
  //added upperCase/lowerCase confirm var
  var upperC = confirm("Would you like uppercase letters");
  if(upperC) {
    userSelection.push(upperCase);
  } 
  
  var lowerC = confirm("would you like lowercase letters");
  if(lowerC) {
    userSelection.push(lowerCase);
  }






  

  // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//create prompt for pw criteria- 1- 25 letters two to 8 numbers, 2 special characters (1 to 35 ttl)
/*create pw crtieria;  not< 8 characters, 
should contian one number
must must contain one specail character; ! @ # ? / * ^ _ */ 
//create a pw length possilbe use a slider 
// create On Click command in html


//possible pw values
let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#??*^_";

//create for loop to choose password characters 
for(var i = 0; i <=...; i++)
