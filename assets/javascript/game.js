var wins = 0;
var words = [{ w: "chesky", h: "Airbnb" }, { w: "collison", h: "Stripe" }, { w: "musk", h: "SpaceX" },
{ w: "butterfield", h: "Slack" }, { w: "mullen", h: "Instacart" }, { w: "bhatt", h: "Robinhood" },
{ w: "cheever", h: "quora" }, { w: "blumenthal", h: "Warby Parker" }, { w: "neumann", h: "WeWork" },
];
var guessedLetters = [];
var numWords = 0;
var currentWord;
var remainingGuesses;
function resetElements() {
    var index = Math.floor(Math.random() * words.length);
    console.log(index);
    var currentWord = words[index].w;
    document.getElementById("wins").textContent = "Wins: " + wins;
    var placeholder = "";
    for (var i = 0; i < currentWord.length; i++) {
        placeholder = placeholder + "_ ";
    }
    document.getElementById("word").textContent = "Word: " + placeholder;
    document.getElementById("founder").textContent = "Founder of " + words[index].h;
    console.log(currentWord);
    guessedLetters = [];
}

resetElements();