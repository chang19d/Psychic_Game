var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-text");
var farText = document.getElementById("far-text");
// var farText = document.getElementsByClassName("far-text");

var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
   var wins = 0;
   var losses = 0;
   var guesses = 10;
   var guessFar = "None";
   var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

   
   
        document.onkeyup = function(event) {
            
            var userGuess = event.key;
            userGuess = userGuess.toLowerCase();
            
            console.log("This is the key pressed " + userGuess);
            console.log("This is the guess so far " + guessFar);
            console.log("Computer guess " + computerGuess);
            if(guessFar === "None"){
                farText.textContent = userGuess + ", ";
                guessFar = userGuess;
                console.log("This is this guess so far " + guessFar);
            }else{
                guessFar = guessFar + ", " + userGuess;
                farText.textContent = guessFar;
                console.log("This is this guess so far " + guessFar);
            }
            
            // If user guesses correctly, reset guesses and guessFar and add a win
            if(userGuess === computerGuess){

                wins++;
                guesses = 10;
                guessFar = "None";
                computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


                winsText.textContent = wins;
                guessesText.textContent = guesses;
                farText.textContent = guessFar;
                console.log("THIS IS THE NEW COMPUTER GUESS! " + computerGuess);
            }else{
                guesses--;
                guessesText.textContent = guesses;
            }
            if(guesses === 0){
                losses++;
                guesses = 10;
                guessFar = "None";
                computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


                lossesText.textContent = losses;
                guessesText.textContent = guesses;
                farText.textContent = guessFar;
                console.log("THIS IS THE NEW COMPUTER GUESS! " + computerGuess);
            }
       
    
        }

    

    