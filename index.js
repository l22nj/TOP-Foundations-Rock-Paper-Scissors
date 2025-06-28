function main() {

    let computerScore = 0;
    let humanScore = 0;
    let prevWinner = "";

    function getComputerChoice() {
        return Math.floor(Math.random() * 3) % 3;
    }

    function getHumanChoice() {
        let promptText = prevWinner + `human: ${humanScore}, computer: ${computerScore}\nRock, paper or scissors?`
        let choice = prompt(promptText).toLowerCase();
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
        switch (computerChoice) {
            case 0: {
                prevWinner = "computer chose rock\n";
                break;
            }
            case 1: {
                prevWinner = "computer chose paper\n";
                break;
            }
            case 2: {
                prevWinner = "computer chose scissors\n";
                break;
            }
        }
        if (computerChoice === humanChoice) {
            humanScore += 1;
            computerScore += 1;
            prevWinner += "Draw!\n"
        }
        else if (Math.abs(computerChoice - humanChoice) < 2) {
            if (computerChoice < humanChoice) {
                humanScore += 1
                prevWinner += "You won!\n"
            }
            else {
                computerScore += 1;
                prevWinner += "Computer won :/\n"
            }
        }
        else {
            if (computerChoice < humanChoice) {
                computerScore += 1;
                prevWinner += "Computer won :/\n"
            }
            else {
                humanScore += 1
                prevWinner += "You won!\n"
            }
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
    playGame();

    alert(prevWinner + "\n" + " (" + humanScore + '-' + computerScore + ")");
}

main();








