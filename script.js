const OPTIONS = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let random_choice = Math.floor(Math.random() * 3);

  return OPTIONS[random_choice];
}

// Test getComputerChoice
// console.log("Computer chose", getComputerChoice())

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return { winner: null, message: "Nobody wins! its a TIE." };
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return {
      winner: "player",
      message: `You Win! ${
        playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
      } beats ${
        computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
      }`,
    };
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return {
      winner: "player",
      message: `You Win! ${
        playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
      } beats ${
        computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
      }`,
    };
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return {
      winner: "player",
      message: `You Win! ${
        playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
      } beats ${
        computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
      }`,
    };
  } else {
    return {
      winner: "computer",
      message: `You Lose! ${
        computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
      } beats ${
        playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
      }`,
    };
  }
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

let buttons = document.querySelectorAll(".choice-button");
let resultBox = document.querySelector("#result-box");
buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    let result = playRound(e.target.alt, getComputerChoice());
    let new_line = document.createElement("div");
    new_line.innerText = result.message;
    resultBox.appendChild(new_line);
  })
);
