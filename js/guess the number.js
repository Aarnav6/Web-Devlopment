userName = "user"
userName = prompt(`hello! ${userName} what's your name`); // getting user name
alert(`hello! ${userName} I'm Aarnav Sharma`); // greeting message to user 
let userChoice = prompt("do you want to play gues the number game enter yes or no"); // asking to play the game
if(userChoice.toLowerCase() === "yes") {
    const randomNumber = Math.floor(Math.random() * 100);
    let attempt = 0;
    let userGuess = 0;
    while(true) {
        if(attempt === 0) {
            userGuess = parseInt(prompt("Guess a number between 0 to 100"));
        } else {
            userGuess = parseInt(prompt("Guess a number again"));
        }
        if(userGuess === randomNumber) {
            alert("you guessed the correct number");
            alert(`it took you ${attempt+1} attempt to guess the number`);
            break;
        } else if (userGuess > randomNumber) {
            alert("try guessing a little lower");
        } else if(userGuess < randomNumber) {
            alert("try guessing little higher");
        } else {
            alert("wrong input try again");
        }
        attempt++;
    }
} else if(userChoice.toLowerCase() === "no") {
    alert("Okay, maybe next time!")
} else {
    alert("wrong input refresh page to try again")
}

/*
Math.random() gives an random float value between the 0 and 1 
Math.floor(x) gives the floor value of x 
*/