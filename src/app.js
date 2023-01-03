import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// let button = document.querySelector("#button");
// button.addEventListener(
//   "click",
//   (
window.onload = setInterval(function randomCard() {
  //write your code herefunction ramdomCard() {
  const palos = ["♥", "♣", "♠", "♦"];

  let indexPalo = Math.floor(Math.random() * palos.length);

  //1. obtener el elemento
  let top = document.querySelector(".top");

  //2. manipular
  top.innerHTML = palos[indexPalo];

  // Trabajamos con number

  const number = [
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
    "K",
    "A"
  ];

  let indexnumber = Math.floor(Math.random() * number.length);

  //1. obtener el elemento
  let numero = document.querySelector(".number");

  //2. manipular
  numero.innerHTML = number[indexnumber];

  // Trabajamos con bottom

  //1. obtener el elemento
  let bottom = document.querySelector(".bottom");

  //2. manipular
  bottom.innerHTML = palos[indexPalo];

  if (palos[indexPalo] == "♥" || palos[indexPalo] == "♦") {
    top.style.color = "red";
  } else {
    top.style.color = "black";
  }
  if (palos[indexPalo] == "♥" || palos[indexPalo] == "♦") {
    bottom.style.color = "red";
  } else {
    bottom.style.color = "black";
  }
}, 10000);
