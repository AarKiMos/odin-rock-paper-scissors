const OPTIONS = ['rock', 'paper', 'scissors']

function getComputerChoice() {
let random_choice = Math.floor(Math.random() * 3)

return OPTIONS[random_choice]
}

// console.log("Computer chose", getComputerChoice())
