"use strict";

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getComputerChoice() {
  const randomInt = getRandomNumber(1, 4);
  switch (randomInt) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
  }
  return -1;
}

function playRound(playerSelection, computerSelection) {
  const prettyPlayerSelection =
    playerSelection[0].toUpperCase() + playerSelection.toLowerCase().slice(1);
  let playerWins = false;

  const firstWinCondition =
    prettyPlayerSelection === "Rock" && computerSelection === "Scissors";
  const secondWinCondition =
    prettyPlayerSelection === "Paper" && computerSelection === "Rock";
  const thirdWinCondition =
    prettyPlayerSelection === "Scissors" && computerSelection === "Paper";

  if (firstWinCondition || secondWinCondition || thirdWinCondition)
    playerWins = true;

  if (playerWins)
    return `You Win! ${prettyPlayerSelection} beats ${computerSelection}`;
  else if (prettyPlayerSelection === computerSelection) return `It's a Draw!`;
  else return `You lose! ${computerSelection} beats ${prettyPlayerSelection}`;
}

function game() {
  const playerChoice = prompt("Enter your choice");
  const computerChoice = getComputerChoice();
  console.log(playRound(playerChoice, computerChoice));
}

game();
