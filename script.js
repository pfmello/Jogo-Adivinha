'use strict';

const numberElement = document.querySelector('.number');
const btnCheckElement = document.querySelector('.check');
const againButtonElement = document.querySelector('.again');

const messageElement = document.querySelector('.message');
const scoreElement = document.querySelector('.score');
const highscoreElement = document.querySelector('.highscore');

const bodyElement = document.querySelector('body');

const displayMessage = function (message) {
  messageElement.textContent = message;
};

// Número Secreto
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;

btnCheckElement.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // Se palpite estiver vazio
  if (!guess) {
    displayMessage('Coloque um número, seu 🙉!');

    //Player vence o jogo !
  } else if (guess === secretNumber) {
    displayMessage('Parabéns seu mongol, venceu ! 🎈');
    bodyElement.style.backgroundColor = '#60b347';
    numberElement.style.width = '30rem';
    numberElement.textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      highscoreElement.textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 0) {
      score--;
      messageElement.textContent =
        guess > secretNumber ? ' Muito alto 🙄' : ' Muito baixo 🤯';
      scoreElement.textContent = score;
    } else {
      displayMessage(' Perdeu e se fudeu 🤡');
      scoreElement.textContent = 0;
    }
  }
});

againButtonElement.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  displayMessage('Comece a adivinhar...');
  scoreElement.textContent = score;
  numberElement.textContent = '?';
  document.querySelector('.guess').value = '';
  bodyElement.style.backgroundColor = '#222';
  numberElement.style.width = '15rem';
});
