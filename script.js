const OPTIONS = ["rock", "paper", "scissors"];

function capitalise(input_string) {
  return (
    input_string.charAt(0).toUpperCase() + input_string.slice(1).toLowerCase()
  );
}

function getComputerChoice() {
  let random_choice = Math.floor(Math.random() * 3);

  return OPTIONS[random_choice];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return { winner: null, message: "Nobody wins! its a TIE." };
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return {
      winner: "player",
      message: `You Win! ${capitalise(playerSelection)} beats ${capitalise(
        computerSelection
      )}`,
    };
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return {
      winner: "player",
      message: `You Win! ${capitalise(playerSelection)} beats ${capitalise(
        computerSelection
      )}`,
    };
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return {
      winner: "player",
      message: `You Win! ${capitalise(playerSelection)} beats ${capitalise(
        computerSelection
      )}`,
    };
  } else {
    return {
      winner: "computer",
      message: `You Lose! ${capitalise(computerSelection)} beats ${capitalise(
        playerSelection
      )}`,
    };
  }
}

function updateScore() {
  playerScoreDisplay.innerText = playerScore;
  computerScoreDisplay.innerText = computerScore;
}

let modal = document.querySelector("#welcome-modal");
let startButton = document.querySelector("#start-btn");

startButton.addEventListener("click", (e) => {
  let PlayerNameInput = document.querySelector("#player-name-input");
  let PlayerNameBox = document.querySelector("#player-namebox");

  PlayerNameBox.innerText = PlayerNameInput.value || "Player";
  modal.classList.add("display-none");
});

const buttons = document.querySelectorAll(".choice-button");
const resultBox = document.querySelector("#result-box");

const playerChoiceDisplay = document.querySelector("#player-choice-box");
const computerChoiceDisplay = document.querySelector("#computer-choice-box");

const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");

let playerScore = 0;
let computerScore = 0;

let roundCount = 0;

updateScore();

function handlePlayerChoiceClick(e) {
  roundCount++;

  let playerChoice = e.target.alt;
  let computerChoice = getComputerChoice();

  playerChoiceDisplay.innerText = playerChoice;
  computerChoiceDisplay.innerText = capitalise(computerChoice);

  let result = playRound(playerChoice, computerChoice);

  if (result.winner == "player") playerScore++;
  if (result.winner == "computer") computerScore++;

  updateScore();

  let new_line = document.createElement("p");
  new_line.innerText = `R${roundCount}: ${result.message}`;
  resultBox.appendChild(new_line);

  checkWinCondition();
}

const winModal = document.getElementById("win-modal");
const winImage = document.getElementById("img-win");
const lossImage = document.getElementById("img-loss");
const winText = document.getElementById("win-text");

function checkWinCondition() {
  if (playerScore == 5) {
    winImage.classList.remove("display-none");
    lossImage.classList.add("display-none");
    winModal.classList.remove("display-none");
    winText.innerText = "Hooray!! You Won!!!";
  }
  if (computerScore == 5) {
    winImage.classList.add("display-none");
    lossImage.classList.remove("display-none");
    winModal.classList.remove("display-none");
    winText.innerText = "Computer Won, Better luck next time.";
  }
}

function handleReset() {
  roundCount = 0;

  playerScore = 0;
  computerScore = 0;
  updateScore();

  playerChoiceDisplay.innerText = "";
  computerChoiceDisplay.innerText = "";

  resultBox.innerHTML = "";

  winModal.classList.add("display-none");
}

buttons.forEach((button) =>
  button.addEventListener("click", handlePlayerChoiceClick)
);

const resetBtn = document.querySelector("#reset-button");
resetBtn.addEventListener("click", handleReset);

const winResetBtn = document.querySelector("#win-reset");
winResetBtn.addEventListener("click", handleReset);
