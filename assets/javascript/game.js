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
    userScore.text(0);

    // generate a new random number
    randomNumber = Math.floor(Math.random() * 101) + 19;
    $('.random-number').text(randomNumber);

    // random number generator for crystal img from 1 -12
    var redCrystal = Math.floor(Math.random() * 12) + 1;
    var greenCrystal = Math.floor(Math.random() * 12) + 1;
    var yellowCrystal = Math.floor(Math.random() * 12) + 1;
    var blueCrystal = Math.floor(Math.random() * 12) + 1;
}

// crystal img click events
$('#red-crystal').on('click', function() {

    // add the redCrystal random number to the user score (counter)
    userScore = userScore + redCrystal;
    $('#user-score').text(userScore);


    if (redCrystal === randomNumber) {
        // add +1 to wins
        wins++;
        $('#wins').text(wins);

        // Display the status
        $('#status').text("Congrats! You won.");

        // When won call the reset function
        reset();

    } else if (redCrystal > randomNumber) {
        // add +1 to losses
        losses++;
        $('#losses').text(losses);

        // Display the status
        $('#status').text("HA! You lost.");

        // When lost call the reset function
        reset();
    }

    // test
    console.log("Red crystal: " + redCrystal);
});

$('#green-crystal').on('click', function() {
    // output the random number crystal to the user score
    // $(userScore).text(greenCrystal);
    $('#user-score').prepend(greenCrystal);

    // add the redCrystal random number to the user score
    userScore = userScore + greenCrystal;

    if (greenCrystal === randomNumber) {
        // add +1 to wins
        wins++;
        $('#wins').text(wins);

        // Display the status
        $('#status').text("Congrats! You won.");

        // When won call the reset function
        reset();

    } else if (greenCrystal > randomNumber) {
        // add +1 to losses
        losses++;
        $('#losses').text(losses);

        // Display the status
        $('#status').text("HA! You lost.");

        // When lost call the reset function
        reset();
    }

    // test
    console.log("Green crystal: " + greenCrystal);
});

// $('#yellow-crystal').on('click', function() {
//     // output the random number crystal to the user score
//     $(userScore).text(yellowCrystal);

//     // add the redCrystal random number to the user score
//     yellowCrystal += yellowCrystal;

//     if (redCrystal === randomNumber) {
//         // add +1 to wins
//         wins++;
//         $('#wins').text(wins);

//         // When won call the reset function
//         reset();

//     } else if (redCrystal > randomNumber) {
//         // add +1 to losses
//         losses++;
//         $('#losses').text(losses);

//         // When lost call the reset function
//         reset();
//     }

//     // test
//     console.log("Yellow crystal: " + yellowCrystal);
// });

// $('#blue-crystal').on('click', function() {
//     // output the random number crystal to the user score
//     $(userScore).text(blueCrystal);

//     // add the redCrystal random number to the user score
//     blueCrystal += blueCrystal;

//     if (redCrystal === randomNumber) {
//         // add +1 to wins
//         wins++;
//         $('#wins').text(wins);

//         // When won call the reset function
//         reset();

//     } else if (redCrystal > randomNumber) {
//         // add +1 to losses
//         losses++;
//         $('#losses').text(losses);

//         // When lost call the reset function
//         reset();
//     }

//     // test
//     console.log("Blue crystal: " + blueCrystal);
// });