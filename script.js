'use strict';

const numberElement = document.querySelector('.number');
const btnCheckElement = document.querySelector('.check');
const guessInputElement = document.querySelector('.guess');

const randomNumber = Math.floor(Math.random() * 20) + 1;
numberElement.textContent = randomNumber;

btnCheckElement.addEventListener('click', function () {
  const userGuess = guessInputElement.value;

  if (+userGuess === randomNumber) alert('venceu');
});
