function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function getComputerChoice() {
    const randomInt = getRandomNumber(1, 3);
    switch (randomInt) {
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissors";
    }
    return -1;
}
console.log(getComputerChoice());