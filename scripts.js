let x = Math.floor(Math.random() * 3) + 1
let y

function getComputerChoice() {
  switch(x) {
    case 1:
      y = "Rock"
      break;
    case 2:
      y = "Paper"
      break;
    case 3:
      y = "Scissors"
      break;
  }
}

getComputerChoice();

function playRound(playerSelection, computerSelection) {
  player = playerSelection.toLowerCase();
  computer = computerSelection.toLowerCase();

  const winner = {
    rock: "Scissors",
    scissors: "Paper",
    paper: "Rock"
  }

  if(player === computer) {
    console.log("It's a tie!");
  }

  else if (winner[player] === computer) {
    console.log("You Win! " + playerSelection + " beats " + computerSelection + ".");
  }

  else {
    console.log("You Lose! " + computerSelection + " beats " + playerSelection + ".");
  }
}

const playerSelection = "Rock"

playRound(playerSelection, y)