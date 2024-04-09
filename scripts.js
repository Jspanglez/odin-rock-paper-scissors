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

const container = document.querySelector("div")

function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase();
  let p = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
  let computer = computerSelection.toLowerCase();

  const winner = {
    rock: "Scissors",
    scissors: "Paper",
    paper: "Rock"
  }

  let text = document.createElement("p")
  text.style.color = "White"
  text.style.fontFamily = "Roboto,sans-serif"
  container.appendChild(text)

  switch(player) {
    case "rock":
      if(computer == "rock") {
        text.textContent = (`It's a tie!\n\nYou: ${playerScore}\nCOM: ${computerScore}`)
      } else if (computer == "paper") {
        computerScore += 1
        text.textContent = (`You Lose! ${computerSelection} beats ${p}.\n\nYou: ${playerScore}\nCOM: ${computerScore}`)
      } else if (computer == "scissors") {
        playerScore += 1
        text.textContent = (`You Win! ${p} beats ${computerSelection}.\n\nYou: ${playerScore}\nCOM: ${computerScore}`)
      }
      break;

    case "paper":
      if(computer == "rock") {
        playerScore += 1
        text.textContent = (`You Win! ${p} beats ${computerSelection}.\n\nYou: ${playerScore}\nCOM: ${computerScore}`)
      } else if (computer == "paper") {
        text.textContent = (`It's a tie!\n\nYou: ${playerScore}\nCOM: ${computerScore}`)
      } else if (computer == "scissors") {
        computerScore += 1
        text.textContent = (`You Lose! ${computerSelection} beats ${p}.\n\nYou: ${playerScore}\nCOM: ${computerScore}`)
      }
      break;

    case "scissors":
      if(computer == "rock") {
        computerScore += 1
        text.textContent = (`You Lose! ${computerSelection} beats ${p}.\n\nYou: ${playerScore}\nCOM: ${computerScore}`)
      } else if (computer == "paper") {
        playerScore += 1
        text.textContent = (`You Win! ${p} beats ${computerSelection}.\n\nYou: ${playerScore}\nCOM: ${computerScore}`)
      } else if (computer == "scissors") {
        text.textContent = (`It's a tie!\n\nYou: ${playerScore}\nCOM: ${computerScore}`)
      }
      break;
  }
}

const rock = document.getElementById("r")
const paper = document.getElementById("p")
const scissors = document.getElementById("s")

rock.addEventListener('click',function() {
  getComputerChoice();
  playRound("rock", y)
  game();
});

paper.addEventListener('click',function() {
  getComputerChoice();
  playRound("paper", y)
  game();
});

scissors.addEventListener('click',function() {
  getComputerChoice();
  playRound("scissors", y)
  game();
});

function game() {

  let msg

  const winner = document.createElement("p")
  winner.style.color = "White"
  winner.style.fontFamily = "Roboto,sans-serif"

  if (playerScore == 5) {
    msg = "Congratualtions! You win the game!"
    winner.textContent = (`The final score is ${playerScore} - ${computerScore}.\n\n${msg}`)
    container.appendChild(winner)
    rock.disabled = true
    paper.disabled = true
    scissors.disabled = true
  }

  else if (computerScore == 5) {
    msg = "Oh dear. Better luck next time!"
    winner.textContent = (`The final score is ${playerScore} - ${computerScore}.\n\n${msg}`)
    container.appendChild(winner)
    rock.disabled = true
    paper.disabled = true
    scissors.disabled = true
  }
}

game();