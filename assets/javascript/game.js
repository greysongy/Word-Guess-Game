var wins = 0;
var words = [{ w: "brian chesky", h: "Airbnb" }, { w: "patrick collison", h: "Stripe" }, { w: "elon musk", h: "SpaceX" }, 
{ w: "stewart butterfield", h: "Slack" }, {w: "max mullen", h: "Instacart"}, {w: "baiju bhatt", h: "Robinhood"}, 
{w: "charlie cheever", h: "quora"}, {w: "neil blumenthal", h: "Warby Parker"}, {w: "adam neumann", h: "WeWork"},
];
var guessedLetters = [];
var numWords = 0;
var currentWord
document.getElementById("wins").textContent = "Wins: " + wins;