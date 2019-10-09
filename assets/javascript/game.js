var wins = 0;
var losses = 0;
var userScore = $('#user-score');

// randomNumber variable will target the class div "random-number"
var randomNumber = $('.random-number');

// Generate a random number from 19 - 120 (max - min).
// 120 is the max number so we subtract it to 19 which is the min number
$(randomNumber).text(Math.floor(Math.random() * (120 - 19) + 1) + 19);

// crystal img click events
$('.crystal-img').on("click", function() {

    // random number generator for crystal img from 1 -12
    var randomImgNumber = Math.floor(Math.random() * 12) + 1;

    // test
    console.log(randomImgNumber);
});

var userScore = $('#user-score');