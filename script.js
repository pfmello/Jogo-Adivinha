'use strict';

const numberElement = document.querySelector('.number');
const btnCheckElement = document.querySelector('.check');
const againButtonElement = document.querySelector('.again');

const messageElement = document.querySelector('.message');

const bodyElement = document.querySelector('body');

let secretNumber = Math.floor(Math.random() * 20) + 1;
console.log(secretNumber);

btnCheckElement.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    messageElement.textContent = 'Coloque um número, seu 🙉!';
    return;
  }

  if (guess === secretNumber) {
    numberElement.textContent = secretNumber;
    bodyElement.style.backgroundColor = '#60b347';
  }
});

againButtonElement.addEventListener('click', function () {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  numberElement.textContent = '?';
  bodyElement.style.backgroundColor = '#222';
});
