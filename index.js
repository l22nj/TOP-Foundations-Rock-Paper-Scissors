function main() {

    let computerScore = 0;
    let humanScore = 0;
    let playCount = 0;

    let buttonRock = document.querySelector("#rock");
    let buttonPaper = document.querySelector("#paper");
    let buttonScissors = document.querySelector("#scissors");
    let scoreCount = document.querySelector("#score");
    let winnerText = document.querySelector("#winner");

    buttonRock.addEventListener("click", playAsRock);
    buttonPaper.addEventListener("click", playAsPaper);
    buttonScissors.addEventListener("click", playAsScissors);

    function getComputerChoice() {
        return Math.floor(Math.random() * 3) % 3;
    }

    function determineWinner(computerChoice, humanChoice) {
        let spanComputerText = document.querySelector("#computerChoice")
        switch (computerChoice) {
            case 0: {
                spanComputerText.innerText = "rock";
                break;
            }
            case 1: {
                spanComputerText.innerText = "paper";
                break;
            }
            case 2: {
                spanComputerText.innerText = "scissors";
                break;
            }
        }
        if (computerChoice === humanChoice) {
            humanScore += 1;
            computerScore += 1;
        }
        else if (Math.abs(computerChoice - humanChoice) < 2) {
            if (computerChoice < humanChoice) {
                humanScore += 1
            }
            else {
                computerScore += 1;
            }
        }
        else {
            if (computerChoice < humanChoice) {
                computerScore += 1;
            }
            else {
                humanScore += 1
            }
        }
        console.log(humanScore + "-" + computerScore)
        scoreCount.innerText = humanScore + "-" + computerScore;
        if (++playCount === 5) {
            let winner;
            if (humanScore > computerScore) winner = "You won:DDDD";
            else if (computerScore < humanScore) winner = "You lost:///";
            else winner = "you got a draw :D";
            winnerText.innerText = winner;
        }
    }
    function playAsRock() {
        determineWinner(getComputerChoice(), 0);
    }
    function playAsPaper() {
        determineWinner(getComputerChoice(), 1);
    }
    function playAsScissors() {
        determineWinner(getComputerChoice(), 2);
    }
}

main();








