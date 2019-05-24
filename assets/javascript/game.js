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
function resetElements() {
    if (!gameOver) {
        currentIndex = Math.floor(Math.random() * words.length);
        currentWord = words[currentIndex].w;
        document.getElementById("wins").textContent = "Wins: " + wins;
        placeholder = "";
        for (var i = 0; i < currentWord.length; i++) {
            placeholder = placeholder + "_ ";
        }
        document.getElementById("word").textContent = "Word: " + placeholder;
        document.getElementById("founder").textContent = "Founder of " + words[currentIndex].h;
        guessedLetters = [];
        remainingGuesses = 10;
        document.getElementById("guesses").textContent = "Remaining Guesses: " + remainingGuesses;
        document.getElementById("letters").textContent = "Guessed Letters: " + guessedLetters;
    }
}

function setCharAt(str, index, chr) {
    var temp = "";
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

document.onkeyup = function (event) {
    var currentGameOver = false;
    if (!gameOver) {
        var key = event.key;
        if (key.match((/[a-z]/i))) {
            if (!guessedLetters.includes(key)) {
                if (currentWord.includes(key)) {
                    for (var i = 0; i < currentWord.length; i++) {
                        if (currentWord[i] === key) {
                            placeholder = setCharAt(placeholder, (2 * i), key);
                            document.getElementById("word").textContent = "Word: " + placeholder;
                        }
                    }
                }
                else {
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
            if (checkWin()) {
                words.splice(currentIndex, 1);
                numWords++;
                console.log("Number of Words " + numWords);
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