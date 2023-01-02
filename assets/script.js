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
    
    
    var pic1 = document.createElement('img');
    pic1.src = './assets/pics/1.png';
    picEl.appendChild(pic1);
    fart1.play();
       
};

function bootyBomb () {
    $('#pic').empty();
    
    var pic2 = document.createElement('img');
    pic2.src = './assets/pics/2.png';
    picEl.appendChild(pic2);
    fart2.play();
};

function buttSneeze () {
    $('#pic').empty();
    
    var pic3 = document.createElement('img');
    pic3.src = './assets/pics/3.png';
    picEl.appendChild(pic3);
    fart3.play();
};

function colonBowlin () {
    $('#pic').empty();
    
    var pic4 = document.createElement('img');
    pic4.src = './assets/pics/4.png';
    picEl.appendChild(pic4);
    fart4.play();
};

function fowlHowl () {
    $('#pic').empty();
    
    var pic5 = document.createElement('img');
    pic5.src = './assets/pics/5.png';
    picEl.appendChild(pic5);
    fart5.play();
}
function oneManBand () {
    $('#pic').empty();
    
    var pic6 = document.createElement('img');
    pic6.src = './assets/pics/6.png';
    picEl.appendChild(pic6);
    fart6.play();
}

function powerPuff (){
    $('#pic').empty();
    
    var pic7 = document.createElement('img');
    pic7.src = './assets/pics/7.png';
    picEl.appendChild(pic7);
    fart7.play();
}


function rumpRoar () {
    $('#pic').empty();
    
    var pic8 = document.createElement('img');
    pic8.src = './assets/pics/8.png';
    picEl.appendChild(pic8);
    fart8.play();
}