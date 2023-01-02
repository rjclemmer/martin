var picEl = document.getElementById("pic");

const fart1 = new Audio("./assets/sounds/fart-01.mp3");
const fart2 = new Audio("./assets/sounds/fart-02.mp3");
const fart3 = new Audio("./assets/sounds/fart-03.mp3");
const fart4 = new Audio("./assets/sounds/fart-04.mp3");
const fart5 = new Audio("./assets/sounds/fart-squeak-02.mp3");
const fart6 = new Audio("./assets/sounds/fart-05.mp3");
const fart7 = new Audio("./assets/sounds/fart-07.mp3");
const fart8 = new Audio("./assets/sounds/fart-08.mp3");

function airTulip () {
    $('#pic').empty();;
    fart1.play();
    
    var pic1 = document.createElement('img');
    pic1.src = './assets/pics/1.png';
    picEl.appendChild(pic1);
       
};

function bootyBomb () {
    $('#pic').empty();
    fart2.play();
    var pic2 = document.createElement('img');
    pic2.src = './assets/pics/2.png';
    picEl.appendChild(pic2);
};

function buttSneeze () {
    $('#pic').empty();
    fart3.play();
    var pic3 = document.createElement('img');
    pic3.src = './assets/pics/3.png';
    picEl.appendChild(pic3);
};

function colonBowlin () {
    $('#pic').empty();
    fart4.play();
    var pic4 = document.createElement('img');
    pic4.src = './assets/pics/4.png';
    picEl.appendChild(pic4);
};

function fowlHowl () {
    $('#pic').empty();
    fart5.play();
    var pic5 = document.createElement('img');
    pic5.src = './assets/pics/5.png';
    picEl.appendChild(pic5);
}
function oneManBand () {
    $('#pic').empty();
    fart6.play();
    var pic6 = document.createElement('img');
    pic6.src = './assets/pics/6.png';
    picEl.appendChild(pic6);
}

function powerPuff (){
    $('#pic').empty();
    fart7.play();
    var pic7 = document.createElement('img');
    pic7.src = './assets/pics/7.png';
    picEl.appendChild(pic7);
}

function rumpRoar () {
    $('#pic').empty();
    fart8.play();
    var pic8 = document.createElement('img');
    pic8.src = './assets/pics/8.png';
    picEl.appendChild(pic8);
}