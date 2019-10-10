var wins = 0;
var losses = 0;
var userScore = $('#user-score').text(0);
var lockNumber = false;


// Generate a random number from 19 - 120 (max - min).
// 120 is the max number so we subtract it to 19 which is the min number
var randomNumber = $('.random-number').text(Math.floor(Math.random() * 101) + 19);

// random number generator for crystal img from 1 -12
var redCrystal = Math.floor(Math.random() * 12) + 1;
var greenCrystal = Math.floor(Math.random() * 12) + 1;
var yellowCrystal = Math.floor(Math.random() * 12) + 1;
var blueCrystal = Math.floor(Math.random() * 12) + 1;

function reset() {
    // set the user score counter to 0
    $('#user-score').text(0);

    // generate a new random number
    randomNumber = $('.random-number').text(Math.floor(Math.random() * (120 - 19) + 1) + 19);

    // random number generator for crystal img from 1 -12
    var redCrystal = Math.floor(Math.random() * 12) + 1;
    var greenCrystal = Math.floor(Math.random() * 12) + 1;
    var yellowCrystal = Math.floor(Math.random() * 12) + 1;
    var blueCrystal = Math.floor(Math.random() * 12) + 1;
}

// crystal img click events
$('#red-crystal').on('click', function() {
    // output the random number crystal to the user score
    $(userScore).text(redCrystal);

    // add the redCrystal random number to the user score
    redCrystal += redCrystal;

    // test
    console.log("Red crystal: " + redCrystal);
});

$('#green-crystal').on('click', function() {
    // output the random number crystal to the user score
    $(userScore).text(greenCrystal);

    // add the redCrystal random number to the user score
    greenCrystal += greenCrystal;

    // test
    console.log("Green crystal: " + greenCrystal);
});

$('#yellow-crystal').on('click', function() {
    // output the random number crystal to the user score
    $(userScore).text(yellowCrystal);

    // add the redCrystal random number to the user score
    yellowCrystal += yellowCrystal;

    // test
    console.log("Yellow crystal: " + yellowCrystal);
});

$('#blue-crystal').on('click', function() {
    // output the random number crystal to the user score
    $(userScore).text(blueCrystal);

    // add the redCrystal random number to the user score
    blueCrystal += blueCrystal;

    // test
    console.log("Blue crystal: " + blueCrystal);
});