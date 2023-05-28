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

