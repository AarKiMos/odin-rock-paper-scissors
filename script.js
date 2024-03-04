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

// Test playRound
// const playerSelection = "RocK";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

// function playGame() {
//   let playerWinCount = 0
//   let computerWinCount = 0
//   for (let i = 0; i < 5; i++) {
//     let playerInput = prompt("Enter your choice.")
//     let result = playRound(playerInput, getComputerChoice())
//     if (result.winner === "player") {
//       playerWinCount++
//     }
//     else if(result.winner === "computer") {
//       computerWinCount++
//     }

//     console.log(result.message)
//   }

//   if (playerWinCount > computerWinCount) { console.log("Player Wins!")}
//   else if (computerWinCount > playerWinCount) {console.log("Computer Wins!")}
//   else {console.log("Nobody wins! its a tie.")}
// }

// playGame()

let modal = document.querySelector(".modal-background");
let startButton = document.querySelector("#start-btn");

startButton.addEventListener("click", (e) => {
  let PlayerNameInput = document.querySelector("#player-name-input");
  let PlayerNameBox = document.querySelector("#player-namebox");

  PlayerNameBox.innerText = PlayerNameInput.value || "Player";
  modal.setAttribute("hidden", "true");
});

const buttons = document.querySelectorAll(".choice-button");
const resultBox = document.querySelector("#result-box");

const playerChoiceDisplay = document.querySelector("#player-choice-box");
const computerChoiceDisplay = document.querySelector("#computer-choice-box");

const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");

let playerScore = 0;
let computerScore = 0;

updateScore();

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    let playerChoice = e.target.alt;
    let computerChoice = getComputerChoice();

    playerChoiceDisplay.innerText = playerChoice;
    computerChoiceDisplay.innerText = capitalise(computerChoice);

    let result = playRound(playerChoice, computerChoice);

    if (result.winner == "player") playerScore++;
    if (result.winner == "computer") computerScore++;

    updateScore();

    let new_line = document.createElement("p");
    new_line.innerText = result.message;
    resultBox.appendChild(new_line);
  })
);

const resetBtn = document.querySelector("#reset-button");
resetBtn.addEventListener("click", (e) => {
  playerScore = 0;
  computerScore = 0;
  updateScore();

  playerChoiceDisplay.innerText = "";
  computerChoiceDisplay.innerText = "";

  resultBox.innerHTML = "";
});
