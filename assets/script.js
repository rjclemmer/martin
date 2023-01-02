const fart1 = new Audio("./assets/sounds/fart-01.mp3");
const fart2 = new Audio("./assets/sounds/fart-02.mp3");
const fart3 = new Audio("./assets/sounds/fart-03.mp3");
const fart4 = new Audio("./assets/sounds/fart-04.mp3");
const fart5 = new Audio("./assets/sounds/fart-squeak-02.mp3");

function airTulip () {
    fart1.play();
    $('#pic').empty();
    console.log("Air Tulip");    
};

function bootyBomb () {
    fart2.play();
};

function buttSneeze () {
    fart3.play();
};

function colonBowlin () {
    fart4.play();
};

function fowlHowl () {
    fart5.play();
}