var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
var randomDiceImg = "dice" + randomNumber1 + ".png";// dice1.png-dice6.png

var randomImageSource = "images/" + randomDiceImg;// images/dice1.png-images/dice6

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

var randomDiceImg2 = "dice" + randomNumber2 + ".png";

 var randomImageSource2 = "images/" + randomDiceImg2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource2);

if (randomNumber2 < randomNumber1) {
  document.querySelector("h1").innerHTML="Player 1 wins!🚩";
}

else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML="Player 2 wins!🚩";
}

else if (randomNumber1 === randomNumber2) {
   document.querySelector("h1").innerHTML="Draw!";
}