var wins = 0;
var losses = 0;
var userScore = $('#user-score');
var lockNumber = false;


// Generate a random number from 19 - 120 (max - min).
// 120 is the max number so we subtract it to 19 which is the min number
var randomNumber = $('.random-number').text(Math.floor(Math.random() * (120 - 19) + 1) + 19);


// crystal img click events
$('.crystal-img').on("click", function() {

    // random number generator for crystal img from 1 -12
    var randomImgNumber = Math.floor(Math.random() * 12) + 1;

    // click 3 + n = 3;

    // random number generator to stay the same unless the page is refresh.
    if (randomImgNumber !== lockNumber) {

    }

    // output the random number generator to userScore


    // test
    console.log(randomImgNumber);
});