//Assignment Code
//added var & functions
//added variables
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyx";
var numbers = "0123456789";
var specialChar = "!@#$%^&*()?/;:~";

//added userSelection & finalPassword var
var userSelection =[]; 

var finalPassword = [];
//console.log("finalPassword =" + finalPassword);

//added functions, prompt, console.log (1 removed perams passlength)
function generatePassword() { 

  
  var passLength = prompt("Please insert a number between 8 to 128");
  //rememeber to add a condition where IF  the user choose less than 8 or greater than 128 to stop and alert them to follow intsruction. Then ask initial question again 
  if (passLength <8 ) {
    alert ("Please insert a number between 8 to 128");
    return;
  }
  if (passLength >128 ) {
  alert ("Please insert a number between 8 to 128");
  return;
  }
  
  console.log("passlenght: " + passLength);

  //added upperCase/lowerCase confirm var
  var upperC = confirm("Would you like Uppercase Letters");
  if(upperC) {
    userSelection.push(...upperCase);
  } 
  console.log("uppercase = " + userSelection);
  
  var lowerC = confirm("Would you like Lowercase Letters");
  if(lowerC) {
    userSelection.push(...lowerCase);
  }
  console.log("lowercase+uppercase = " + userSelection);

  //added remaining specChar and numb var
  var specC = confirm("Would you like and Special Characters");
  if(specC) {
    userSelection.push(...specialChar);
  }
  console.log("special+lower+upper = " + userSelection);

  var numb = confirm("Would you like to add Numbers to your password?"); 
  if(numb) { 
    userSelection.push(...numbers);
  }
  console.log("special+number+upper+lower = " + userSelection);
  //console.log("final Password = " + finalPassword);

  //not sure if this statement is needed-- if (upperC != true && lowerC != true && specC != true && )
  
  for (let i = 0; i < passLength; i++) {
    console.log("passlength[i]: "+ passLength);
    finalPassword.push(userSelection[Math.floor(Math.random() * userSelection.length)]);
    console.log("final password: "+finalPassword.join("+")); 
    // var randomIndex = Math.floor(Math.random() * passLength);
    // var random = passLength.charAt(randomIndex);
    // console.log(random); 
  }

  document.getElementById('password').value = finalPassword.join("");
  alert('Your new Password is: ' + finalPassword.join(""));
  
  //var math.floor will pick a random index for userSelection array set to var
  //math.floor to pick random char  --name as var use this to concat
}

    //document.getElementById('password').value = finalPassword.join('');
    // alert('Your new Password is: ' + finalPassword.join("");
    // Write password to the #password input
    //function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");
  // console.log(writePassword);

  //passwordText.value = password;

//}

// Add event listener to generate button
// var generateBtn = document.querySelector("#generate");
// generateBtn.addEventListener("click", generatePassword);
