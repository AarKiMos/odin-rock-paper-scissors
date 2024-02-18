const OPTIONS = ['rock', 'paper', 'scissors']

function getComputerChoice() {
  let random_choice = Math.floor(Math.random() * 3)

  return OPTIONS[random_choice]
}

// Test getComputerChoice
// console.log("Computer chose", getComputerChoice())

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase()

  if (playerSelection === computerSelection) {
    return "Nobody wins! its a TIE."
  }
  else if (playerSelection === "rock" && computerSelection === "scissors") {
    return `You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`
  }
  else if (playerSelection === "scissors" && computerSelection === "paper") {
    return `You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`
  }
  else if (playerSelection === "paper" && computerSelection === "rock") {
    return `You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`
  }
  else {
    return `You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`
  }
}

// Test playRound
// const playerSelection = "RocK";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

