// delcations of global variables that will be referenced throughout
var wins = 0;
var words = [{ w: "chesky", h: "Airbnb" }, { w: "collison", h: "Stripe" }, { w: "musk", h: "SpaceX" },
{ w: "butterfield", h: "Slack" }, { w: "mullen", h: "Instacart" }, { w: "bhatt", h: "Robinhood" },
{ w: "cheever", h: "quora" }, { w: "blumenthal", h: "Warby Parker" }, { w: "neumann", h: "WeWork" }, {w: "street", h: "Postmates"},
];
var guessedLetters = [];
var numWords = 0;
var currentWord;
var remainingGuesses = 10;
var placeholder = "";
var gameOver = false;
var outOfWords = false;
var currentIndex;
var currentWord;
var placeholder;

// generic function that iteratively resets elements after a user runs out of guesses/correctly chooses a word
function resetElements() {
    //conditoinal to ensure this does't happen once the game runs out of words
    if (!gameOver) {
        currentIndex = Math.floor(Math.random() * words.length);
        currentWord = words[currentIndex].w;
        document.getElementById("wins").textContent = "Wins: " + wins;
        placeholder = "";
        for (var i = 0; i < currentWord.length; i++) {
            placeholder = placeholder + "_ ";
        }
        //updates the visual text to be consistent with the current values
        document.getElementById("word").textContent = "Word: " + placeholder;
        document.getElementById("founder").textContent = "Founder of " + words[currentIndex].h;
        guessedLetters = [];
        remainingGuesses = 10;
        document.getElementById("guesses").textContent = "Remaining Guesses: " + remainingGuesses;
        document.getElementById("letters").textContent = "Guessed Letters: " + guessedLetters;
    }
}

//helper function designed to change one char of a string, since we are only allowed to access characters of a string using an index
function setCharAt(str, index, chr) {
    var temp = "";
    //sets new values of all temp characters, before ultimately returning that string
    for (var i = 0; i < str.length; i++) {
        if (i === index) {
            temp += chr;
        }
        else {
            temp += str[i];
        }
    }
    return temp;
}

//helper function that checks if a user has correctly guessed a word (by looking to see if there are any empty slots remaining)
function checkWin() {
    for (var i = 0; i < placeholder.length - 1; i += 2) {
        if (placeholder[i] === "_") {
            return false;
        }
    }
    alert("Congrats, you won! The founder's last name was " + currentWord + "." );
    wins++;
    document.getElementById("wins").textContent = "Wins: " + wins;
    return true;
}

resetElements();

//main body that reacts to key presses by the user
document.onkeyup = function (event) {
    var currentGameOver = false;
    if (!gameOver) {
        var key = event.key;
        //conditionals that check that a character is a valid key, , not in guessed letters, is in the word
        if (key.match((/[a-z]/i))) {
            if (!guessedLetters.includes(key)) {
                if (currentWord.includes(key)) {
                    for (var i = 0; i < currentWord.length; i++) {
                        //cody of work
                        if (currentWord[i] === key) {
                            placeholder = setCharAt(placeholder, (2 * i), key);
                            document.getElementById("word").textContent = "Word: " + placeholder;
                        }
                    }
                }
                else {
                    //alternative that decreases remaining guesses by one, and checks if you're out of guesses
                    remainingGuesses--;
                    document.getElementById("guesses").textContent = "Remaining Guesses: " + remainingGuesses;
                    if (remainingGuesses === 0) {
                        alert("You're out of letters, on to the next word. The correct word was " + currentWord);
                        words.splice(currentIndex, 1);
                        numWords++;
                        resetElements();
                        currentGameOver = true;

                    }
                }
                if(!currentGameOver) {
                guessedLetters.push(key);
                }
                var newString = "";
                for(var i = 0; i < guessedLetters.length; i++) {
                    newString = newString + " " + guessedLetters[i];
                }
                document.getElementById("letters").textContent = "Guessed Letters: " + newString;

            }
            //final check to see if you've won, and if the entire game is over (we've run out of words) 
            if (checkWin()) {
                words.splice(currentIndex, 1);
                numWords++;
                if (numWords === 10) {
                    gameOver= true;
                    alert("Game Over");
                }
                else {
                    resetElements();
                }
            }
        }
    }
}