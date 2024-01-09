let randomNumber = Math.floor(Math.random() * 100 + 1);

let tries = 7
let triesTaken = 0;
let numberTry;

function guessNumber() {
  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;

  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
if(guess=== 0|| guess==="" || guess > 100 || guess < 0  ){
  document.querySelector('.final-output').textContent= "Please enter a number between 1 and 100";
}
  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
 else if(guess>randomNumber){
  document.querySelector('.final-output').textContent = 'Number is too hight, try again ';
 tries -=1
triesTaken += 1
numberTry= document.querySelector('.Tries-output').textContent = `'Number of Tries: ${tries}'`
}
  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
 else if (guess<randomNumber) {
  document.querySelector('.final-output').textContent = 'Number is too low, try again ';
  tries -=1
  triesTaken += 1
  numberTry= document.querySelector('.Tries-output').textContent = `'Number of Tries: ${tries}'`
  
}
  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
else {
    document.querySelector('.final-output').textContent = `'Guess is correct ,Number is ${randomNumber}. You win!' `
    tries -=1
    triesTaken += 1
    numberTry= document.querySelector('.Tries-output').textContent = `'Number of Tries: ${tries}'`
    
  
  }
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  //Reset randomNumber
  //Reset users input field
  //Reset tries, and triesTaken by the user
  tries = 7;
	triesTaken = 0;
	randomNumber = Math.floor((Math.random() * 100) + 1);
	guess = document.querySelector('.inputs-Values').value = '';
	numberOfTries = document.querySelector('.Tries-output').textContent = `'Number of Tries: ${tries}'`;
	document.querySelector('.final-output').textContent = 'Get a number between 1 and 100';
	
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}
document.querySelector('.btnNewGame').addEventListener('click',newGame)
document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
