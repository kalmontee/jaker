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

    // generate a new random number
    randomNumber = Math.floor(Math.random() * 101) + 19;
    $('.random-number').text(randomNumber);

    // random number generator for crystal img from 1 -12
    redCrystal = Math.floor(Math.random() * 12) + 1;
    greenCrystal = Math.floor(Math.random() * 12) + 1;
    yellowCrystal = Math.floor(Math.random() * 12) + 1;
    blueCrystal = Math.floor(Math.random() * 12) + 1;

    // set the user score counter to 0
    userScore = 0;
    $('#userScore').text(userScore);
}

// To avoid DRY - create a function call gameStatus which determines when a player wins or losses the game.
function setWinner() {
    this.wins++
        $('#wins').text(wins);

    // Display the status
    $('#status').text("Congrats! You won.").css('color', 'blue');
}

function setLosser() {
    // add +1 to losses
    this.losses++;
    $('#losses').text(losses);

    // Display the status
    $('#status').text("HA! You lost.").css('color', 'red');
}

// crystal img click events
$('#red-crystal').on('click', function() {

    // add the redCrystal random number to the user score (counter)
    userScore += redCrystal;
    $('#user-score').text(userScore);

    if (userScore === randomNumber) {
        // winner function
        setWinner();

        // reset
        reset();

    } else if (userScore > randomNumber) {
        // losser function
        setLosser();

        // reset
        reset();
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

        // When won call the reset function
        reset();

    } else if (userScore > randomNumber) {
        // call the losser function
        setLosser();

        // When lost call the reset function
        reset();
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

        // When won call the reset function
        reset();

    } else if (userScore > randomNumber) {
        // call the losser function
        setLosser();

        // When lost call the reset function
        reset();
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

        // When won call the reset function
        reset();

    } else if (userScore > randomNumber) {
        // call the losser function
        setLosser();

        // When lost call the reset function
        reset();
    }

    // test
    console.log("Blue crystal: " + blueCrystal);
});