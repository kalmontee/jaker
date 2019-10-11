var wins = 0;
var losses = 0;
var userScore = 0;
$('#user-score').text(userScore);


// Generate a random number from 19 - 120 (max - min).
// 120 is the max number so we subtract it to 19 which is the min number
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
    console.log(userScore); //test

    // generate a new random number
    randomNumber = Math.floor(Math.random() * 101) + 19;
    $('.random-number').text(randomNumber);

    // random number generator for crystal img from 1 -12
    redCrystal = Math.floor(Math.random() * 12) + 1;
    greenCrystal = Math.floor(Math.random() * 12) + 1;
    yellowCrystal = Math.floor(Math.random() * 12) + 1;
    blueCrystal = Math.floor(Math.random() * 12) + 1;
}

// To avoid DRY - create two function calls setWinner and setLosser which determines when a player wins or losses the game.
function setWinner() {

    // 'this' keyword is targetting the global object of the wins variable
    this.wins++;
    $('#wins').text(wins);

    // Display the status
    $('#status').text("Congrats! You won.").css('color', 'blue');

    // when player wins the game will reset
    reset();
}

function setLosser() {
    // add +1 to losses
    // 'this' keyword is targetting the global object of the losses variable
    this.losses++;
    $('#losses').text(losses);

    // Display the status
    $('#status').text("HA! You lost.").css('color', 'red');

    // when player losses the game will reset
    reset();
}

// crystal img click events
$('#red-crystal').on('click', function() {

    // add the redCrystal random number to the user score (counter)
    userScore += redCrystal;
    $('#user-score').text(userScore);

    if (userScore === randomNumber) {
        // winner function
        setWinner();

    } else if (userScore > randomNumber) {
        // losser function
        setLosser();
    }
    // test
    console.log("Red crystal: " + redCrystal);
});

$('#green-crystal').on('click', function() {

    // add the redCrystal random number to the user score
    userScore += greenCrystal;
    $('#user-score').text(userScore);

    if (userScore === randomNumber) {
        // call the winner function
        setWinner();

    } else if (userScore > randomNumber) {
        // call the losser function
        setLosser();
    }

    // test
    console.log("Green crystal: " + greenCrystal);
});

$('#yellow-crystal').on('click', function() {
    // output the random number crystal to the user score
    userScore += yellowCrystal;
    $('#user-score').text(userScore);

    if (userScore === randomNumber) {
        // call the winner function
        setWinner();

    } else if (userScore > randomNumber) {
        // call the losser function
        setLosser();
    }

    // test
    console.log("Yellow crystal: " + yellowCrystal);
});

$('#blue-crystal').on('click', function() {
    // output the random number crystal to the user score
    userScore += blueCrystal;
    $('#user-score').text(userScore);

    if (userScore === randomNumber) {
        // call the winner function
        setWinner();

    } else if (userScore > randomNumber) {
        // call the losser function
        setLosser();
    }

    // test
    console.log("Blue crystal: " + blueCrystal);
});