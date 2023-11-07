'use strict';

const numberElement = document.querySelector('.number');
const btnCheckElement = document.querySelector('.check');
const guessInputElement = document.querySelector('.guess');

const bodyElement = document.querySelector('body');

console.log(numberElement);

const randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);

btnCheckElement.addEventListener('click', function () {
  const userGuess = guessInputElement.value;

  if (+userGuess === randomNumber) {
    numberElement.textContent = randomNumber;
    bodyElement.style.backgroundColor = '#60b347';
  }
});
