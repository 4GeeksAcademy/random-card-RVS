/* eslint-disable */
import "bootstrap";
import "./style.css";

import "../src/assets/img/logorvs.png";
import "./assets/img/4geeks.ico";

setInterval(tarjetas(), 10000);

function getRandomNumber() {
  const numbers = [
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
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getRandomImage() {
  const images = ["♦", "♥️", "♠️", "♣️"];
  return images[Math.floor(Math.random() * images.length)];
}

function tarjetas() {
  const numero = document.querySelector(".numero");
  const imagen1 = document.querySelector(".imagenes1");
  const imagen2 = document.querySelector(".imagenes2");

  const numeros = getRandomNumber();
  const image = getRandomImage();

  numero.innerHTML = numeros;
  imagen1.innerHTML = image;
  imagen2.innerHTML = image;

  const color = ["red", "black"][Math.floor(Math.random() * 2)];
  imagen1.style.color = color;
  imagen2.style.color = color;
}

const boton = document.querySelector(".boton");
boton.addEventListener("click", function() {
  tarjetas();
});

window.onload = function() {
  for (let i = 0; i < "Random Card RVS".length; i++) {
    setTimeout(() => {
      document.querySelector(".titulo").innerHTML += "Random Card RVS"[i];
    }, i * 100);
  }
};
