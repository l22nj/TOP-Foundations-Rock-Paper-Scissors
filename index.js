function getComputerChoice() {
    return Math.floor(Math.random() * 3) % 3;
}

function getHumanChoice() {
    let choice = prompt("Rock, paper or scissors?").toLowerCase();
    switch (choice) {
        case "rock": {
            return 0;
        }
        case "paper": {
            return 1;
        }
        case "scissors": {
            return 2;
        }
    }
}

function determineWinner(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {}
    else if (Math.abs(computerChoice - humanChoice) < 2) {
        computerChoice < humanChoice ? humanScore += 1: computerScore += 1;
    }
    else {
        computerChoice < humanChoice ? computerScore += 1: humanScore += 1;
    }
}

function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    determineWinner(computerChoice, humanChoice);
    console.log(computerChoice);
    console.log("humanscore: " + humanScore + " computerscore: " + computerScore);
}

function playGame() {
    for (let i= 0; i < 5; ++i) playRound();
}

let computerScore = 0;
let humanScore = 0;

playGame();

let text = computerScore < humanScore ? "you won:D" : "computer won:/"; // odd number of rounds, so no draw
text = text + " (" + humanScore + '-' + computerScore + ")";

alert(text);



