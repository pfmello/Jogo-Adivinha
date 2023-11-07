'use strict';

const numberElement = document.querySelector('.number');
const btnCheckElement = document.querySelector('.check');
const againButtonElement = document.querySelector('.again');

const messageElement = document.querySelector('.message');
const scoreElement = document.querySelector('.score');
const highscoreElement = document.querySelector('.highscore');

const bodyElement = document.querySelector('body');

// Número Secreto
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;

btnCheckElement.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // Se palpite estiver vazio
  if (!guess) {
    messageElement.textContent = 'Coloque um número, seu 🙉!';

    //Player vence o jogo !
  } else if (guess === secretNumber) {
    messageElement.textContent = 'Parabéns seu mongol, venceu ! 🎈';
    bodyElement.style.backgroundColor = '#60b347';
    numberElement.style.width = '30rem';
    numberElement.textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      highscoreElement.textContent = highscore;
    }
  } else if (guess > secretNumber) {
    // Palpite maior que o número secreto
    if (score > 0) {
      score--;
      scoreElement.textContent = score;
      messageElement.textContent = ' Muito alto 🙄';
    } else {
      messageElement.textContent = ' Perdeu e se fudeu 🤡';
    }
  } else if (guess < secretNumber) {
    // Palpite menor que o número secreto
    if (score > 0) {
      score--;
      scoreElement.textContent = score;
      messageElement.textContent = ' Muito baixo 🤯';
    } else {
      messageElement.textContent = ' Perdeu e se fudeu 🤡';
    }
  }
});

againButtonElement.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  messageElement.textContent = 'Comece a adivinhar...';
  scoreElement.textContent = score;
  numberElement.textContent = '?';
  document.querySelector('.guess').value = '';
  bodyElement.style.backgroundColor = '#222';
  numberElement.style.width = '15rem';
});
