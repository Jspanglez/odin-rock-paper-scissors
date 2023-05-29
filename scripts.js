let y

let playerScore = 0
let computerScore = 0

function getComputerChoice() {
  let x = Math.floor(Math.random() * 3) + 1
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

function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase();
  let p = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
  let computer = computerSelection.toLowerCase();

  const winner = {
    rock: "Scissors",
    scissors: "Paper",
    paper: "Rock"
  }

  switch(player) {
    case "rock":
      if(computer == "rock") {
        console.log(`It's a tie!\n\nYou: ${playerScore}\nCOM: ${computerScore}`);
      } else if (computer == "paper") {
        computerScore += 1
        console.log(`You Lose! ${computerSelection} beats ${p}.\n\nYou: ${playerScore}\nCOM: ${computerScore}`);
      } else if (computer == "scissors") {
        playerScore += 1
        console.log(`You Win! ${p} beats ${computerSelection}.\n\nYou: ${playerScore}\nCOM: ${computerScore}`);
      }
      break;

    case "paper":
      if(computer == "rock") {
        playerScore += 1
        console.log(`You Win! ${p} beats ${computerSelection}.\n\nYou: ${playerScore}\nCOM: ${computerScore}`);
      } else if (computer == "paper") {
        console.log(`It's a tie!\n\nYou: ${playerScore}\nCOM: ${computerScore}`);
      } else if (computer == "scissors") {
        computerScore += 1
        console.log(`You Lose! ${computerSelection} beats ${p}.\n\nYou: ${playerScore}\nCOM: ${computerScore}`);
      }
      break;

    case "scissors":
      if(computer == "rock") {
        computerScore += 1
        console.log(`You Lose! ${computerSelection} beats ${p}.\n\nYou: ${playerScore}\nCOM: ${computerScore}`);
      } else if (computer == "paper") {
        playerScore += 1
        console.log(`You Win! ${p} beats ${computerSelection}.\n\nYou: ${playerScore}\nCOM: ${computerScore}`);
      } else if (computer == "scissors") {
        console.log(`It's a tie!\n\nYou: ${playerScore}\nCOM: ${computerScore}`);
      }
      break;
  }

  }

  else if (winner[player] === computer) {
    console.log("You Win! " + playerSelection + " beats " + computerSelection + ".");
  }

  else {
function game() {
  for (let i = 0; i < 5; i++) {
    let input = prompt("Rock, Paper, or Scissors?");
    getComputerChoice();
    playRound(input, y);
  }

  let msg

  if(playerScore > computerScore) {
    msg = "Congratualtions! You win the game!"
  }

  else if (playerScore < computerScore) {
    msg = "Oh dear. Better luck next time!"
  }

  else {
    msg = "Well that was uneventful."
  }

  console.log(`The final score is ${playerScore} - ${computerScore}.\n\n${msg}`);
}

game();