let gameStarted = false;
let gamePaused = false;
let score = 0;
let level = 1;

const startButton = document.getElementById("start-button");
const pauseButton = document.getElementById("pause-button");
const resetButton = document.getElementById("reset-button");
const scoreDisplay = document.querySelector(".score");
const levelDisplay = document.querySelector(".level");

function startGame() {
  gameStarted = true;
  // your code to start the game goes here
}

function pauseGame() {
  gamePaused = true;
  // your code to pause the game goes here
}

function resetGame() {
  gameStarted = false;
  gamePaused = false;
  score = 0;
  level = 1;
  scoreDisplay.textContent = `Score: ${score}`;
  levelDisplay.textContent = `Level: ${level}`;
  // your code to reset the game goes here
}

startButton.addEventListener("click", startGame);
pauseButton.addEventListener("click", pauseGame);
resetButton.addEventListener("click", resetGame);
