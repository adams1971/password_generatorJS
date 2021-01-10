// Assignment Code
var generateBtn = document.querySelector("#generate");

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
