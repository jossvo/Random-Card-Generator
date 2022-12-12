/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  generateRandomCard();
  changeCardSize();
};

var timer;
var cardItem = document.getElementById("card");
var topCardFigure = document.getElementById("top-figure");
var bottomCardFigure = document.getElementById("bottom-figure");
var cardValue = document.getElementById("valor");
var cardWidthInput = document.getElementById("cardWidthRange");
var cardHeightInput = document.getElementById("cardHeightRange");

window.generateRandomCard = function generateRandomCard() {
  let figureList = ["♦", "♥", "♠", "♣"];
  let fiure = figureList[Math.floor(Math.random() * figureList.length)];
  topCardFigure.innerText = fiure;
  bottomCardFigure.innerText = fiure;
  let cardList = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  cardValue.innerText = cardList[Math.floor(Math.random() * cardList.length)];
  if (cardItem.classList.contains("red")) cardItem.classList.remove("red");
  else cardItem.classList.add("red");
  window.clearTimeout(timer);
  timer = window.setTimeout(generateRandomCard, 10000);
};
window.changeCardSize = function changeCardSize() {
  cardItem.style.width = cardWidthInput.value + "vw";
  cardItem.style.height = cardHeightInput.value + "vw";
  if (cardHeightInput.value < 30.5) {
    cardValue.style.fontSize = (8 * cardHeightInput.value) / 30.5 + "vw";
    topCardFigure.style.fontSize = (4.5 * cardHeightInput.value) / 30.5 + "vw";
    bottomCardFigure.style.fontSize =
      (4.5 * cardHeightInput.value) / 30.5 + "vw";
  } else {
    cardValue.style.fontSize = 8 + "vw";
    topCardFigure.style.fontSize = 4.5 + "vw";
    bottomCardFigure.style.fontSize = 4.5 + "vw";
  }
};
window.resetCardSize = function resetCardSize() {
  cardWidthInput.value = 20.5;
  cardHeightInput.value = 30.5;
  topCardFigure.style.fontSize = 4.5 + "vw";
  bottomCardFigure.style.fontSize = 4.5 + "vw";
  bottomCardFigure.style.fontSize = changeCardSize();
};
