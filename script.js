'use strict';

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateComputerChoice() {
  const randomInt = generateRandomNumber(1, 4);
  switch (randomInt) {
    case 1:
      return 'Rock';
    case 2:
      return 'Paper';
    case 3:
      return 'Scissors';
  }
  return -1;
}

function generateSymbol(text) {
  switch (text) {
    case 'Rock':
      return '✊';
    case 'Paper':
      return '✋';
    case 'Scissors':
      return '✌';
  }
}

const updateHeading = message =>
  (document.querySelector('#mainHeading').textContent = message);
const updateCaption = message =>
  (document.querySelector('#caption').textContent = message);
const updateQuesMarks = (playerC, computerC) => {
  document.querySelector('#playerQmark').textContent = playerC;
  document.querySelector('#compQmark').textContent = computerC;
};
const updateScores = (playerScore, compScore) => {
  document.querySelector('#playerScore').textContent = `Player: ${playerScore}`;
  document.querySelector('#compScore').textContent = `Computer: ${compScore}`;
};

let computerChoice = generateComputerChoice();
let buttonPressed = document.querySelectorAll('.btn');


let playerScore = 0;
let compScore = 0;

let playerChoice = 'test';
let gameEnded = false;

for (let i = 0; i < 3; i++) {
  buttonPressed[i].addEventListener('click', function (event) {
    if (gameEnded) return;
    switch (i) {
      case 0:
        playerChoice = 'Rock';
        break;
      case 1:
        playerChoice = 'Paper';
        break;
      case 2:
        playerChoice = 'Scissors';
        break;
      default:
        console.log('ERROR!');
    }

    if (playerChoice === computerChoice) {
      updateHeading("It's a tie !");
      updateCaption(
        `${playerChoice} ties with ${computerChoice.toLowerCase()}`
      );
    } else if (
      (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
      (playerChoice === 'Scissors' && computerChoice === 'Paper') ||
      (playerChoice === 'Paper' && computerChoice === 'Rock')
    ) {
      updateHeading(`You Won !`);
      updateCaption(
        `${computerChoice} is beaten by ${playerChoice.toLowerCase()}`
      );
      playerScore++;
    } else {
      updateHeading(`You Lost !`);
      updateCaption(
        `${playerChoice} is beaten by ${computerChoice.toLowerCase()}`
      );
      compScore++;
    }

    updateQuesMarks(
      generateSymbol(playerChoice),
      generateSymbol(computerChoice)
    );
    updateScores(playerScore, compScore);

    computerChoice = generateComputerChoice();

    if (playerScore === 5 || compScore === 5) {
      gameEnded = true;
      if (playerScore === 5) {
        updateHeading(`You won the Game 🎉🎉🎉`);
      } else updateHeading(`You lost the Game ❌❌❌`);
      updateCaption('Reload the page to play again 😅');
    }
  });
}
