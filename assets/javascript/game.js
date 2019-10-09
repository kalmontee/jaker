var wins = 0;
var losses = 0;
var userScore = $('#user-score').text(0);
var lockNumber = false;


// Generate a random number from 19 - 120 (max - min).
// 120 is the max number so we subtract it to 19 which is the min number
var randomNumber = $('.random-number').text(Math.floor(Math.random() * (120 - 19) + 1) + 19);


function reset() {
    // set the wins to 0
    wins = 0;

    // set the losses to 0
    losses = 0;

    // set the user score counter to 0
    $('#user-score').text(0);

    // generate a new random number
    randomNumber = $('.random-number').text(Math.floor(Math.random() * (120 - 19) + 1) + 19);
}

// crystal img click events

$('#red-crystal').on('click', function() {

    // random number generator for crystal img from 1 -12
    var randomImgNumber = Math.floor(Math.random() * 12) + 1;



    $(userScore).text(randomImgNumber);


    if (userScore === randomNumber) {
        wins++;
        $('#wins').text(wins);

        // Display a message that tells the user he won!
        // $('.scoreboard').text("Congrats! You won!!");

        // reset function
        // reset();

    } else if (userScore > randomNumber) {
        losses++;
        $('#losses').text(losses);

        // Display a message that tells the user he won!
        // $('.scoreboard').text("HA! You Lost...");

        // reset
    }

    // test
    console.log("Red crystal: " + randomImgNumber);
});

// $('#green-crystal').on('click', function() {
//     // random number generator for crystal img from 1 -12
//     var randomImgNumber = Math.floor(Math.random() * 12) + 1;

//     // test
//     console.log("Green crystal: " + randomImgNumber);
// });

// $('#yellow-crystal').on('click', function() {
//     // random number generator for crystal img from 1 -12
//     var randomImgNumber = Math.floor(Math.random() * 12) + 1;

//     // test
//     console.log("Yellow crystal: " + randomImgNumber);
// });

// $('#blue-crystal').on('click', function() {
//     // random number generator for crystal img from 1 -12
//     var randomImgNumber = Math.floor(Math.random() * 12) + 1;

//     // test
//     console.log("Blue crystal: " + randomImgNumber);
// });