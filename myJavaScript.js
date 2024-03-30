var fileNames = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png",
];

function pickRandom() {
    var number = Math.floor(Math.random() * 6);
    return [fileNames[number],number];
}

function setRandomImages() {
    var image1 = pickRandom();
    var image2 = pickRandom();
    document.getElementsByClassName("img1")[0].src = image1[0];
    document.getElementsByClassName("img2")[0].src = image2[0];
    if(image1[1] > image2[1]) {
        document.querySelector("h1").innerHTML = "Player 1 Won"
    } else if (image1[1] == image2[1]) {
        document.querySelector("h1").innerHTML = "Draw"
    } else {
        document.querySelector("h1").innerHTML = "Player 2 Won"
    }
}

window.onload = setRandomImages;
