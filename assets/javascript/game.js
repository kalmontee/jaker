var wins = 0;
var losses = 0;
var userScore = 0;
$('#user-score').text(userScore);

// Generate a random number from 19 - 120 (max - min).
var randomNumber = Math.floor(Math.random() * 101) + 19;
$('.random-number').text(randomNumber);

// random number generator for crystal img from 1 -12
var redCrystal = Math.floor(Math.random() * 12) + 1;
var greenCrystal = Math.floor(Math.random() * 12) + 1;
var yellowCrystal = Math.floor(Math.random() * 12) + 1;
var blueCrystal = Math.floor(Math.random() * 12) + 1;

function reset() {
    // set the user score counter to 0
    userScore = 0;
    $('#user-score').text(userScore);

    // generate a new random number
    randomNumber = Math.floor(Math.random() * 101) + 19;
    $('.random-number').text(randomNumber);

    // random number generator for crystal img from 1 -12
    redCrystal = Math.floor(Math.random() * 12) + 1;
    greenCrystal = Math.floor(Math.random() * 12) + 1;
    yellowCrystal = Math.floor(Math.random() * 12) + 1;
    blueCrystal = Math.floor(Math.random() * 12) + 1;
}

// Will declare if the player wins or losses
function setWinner() {

    if (userScore === randomNumber) {
        // 'this' keyword is targetting the global object of the wins variable
        this.wins++;
        $('#wins').text(wins);

        // Display the status
        $('#status').text("Congrats! You won.").css('color', 'blue');

        // when the player wins, the game will reset.
        reset();

    } else if (userScore > randomNumber) {
        // 'this' keyword is targetting the global object of the losses variable
        this.losses++;
        $('#losses').text(losses);

        // Display the status
        $('#status').text("HA! You lost.").css('color', 'red');

        // when player losses, the game will reset
        reset();
    }
}

// crystal img click events
$('#red-crystal').on('click', function() {

    // output the random number crystal to the user score
    userScore += redCrystal;
    $('#user-score').text(userScore);

    setWinner();
});

$('#green-crystal').on('click', function() {

    // output the random number crystal to the user score
    userScore += greenCrystal;
    $('#user-score').text(userScore);

    setWinner();
});

$('#yellow-crystal').on('click', function() {
    // output the random number crystal to the user score
    userScore += yellowCrystal;
    $('#user-score').text(userScore);

    setWinner();
});

$('#blue-crystal').on('click', function() {
    // output the random number crystal to the user score
    userScore += blueCrystal;
    $('#user-score').text(userScore);

    setWinner();
});