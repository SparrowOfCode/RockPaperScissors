function playGame() {
    let computerScore = 0;
    let userScore = 0;

    function getComputerChoice() {
        const randNum = Math.floor(Math.random() * 3) + 1;
        if (randNum === 1) {
            console.log("Rock")
            return "Rock"
        } else if (randNum === 2) {
            console.log("Paper")
            return "Paper"
        } else {
            console.log("Scissors")
            return "Scissors"
        }
    }

    function getUserChoice() {
        let choice = prompt("Please choose Rock, Paper, or Scissors");
        if (choice.toLowerCase() === "rock") {
            console.log("Rock")
            return "Rock"
        } else if (choice.toLowerCase() === "paper") {
            console.log("Paper")
            return "Paper"
        } else if (choice.toLowerCase() === "scissors") {
            console.log("Scissors")
            return "Scissors"
        } else {
            alert("could not read input!")
        }
    }

    function playRound(humanChoice, computerChoice) {
        switch (true) {
            case (humanChoice === computerChoice):
                console.log("Its a tie!")
                break;
            case (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock"):
                console.log("You Win! Paper beats rock.")
                userScore++;
                break;
            case (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors"):
                console.log("You Lose! Scissors beats paper.")
                computerScore++;
                break;
            case (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors"):
                console.log("You Win! Rock beats scissors.")
                userScore++;
                break;
            case (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper"):
                console.log("You Lose! Paper beats rock.")
                computerScore++;
                break;
            case (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper"):
                console.log("You Win! Scissors beats paper.")
                userScore++;
                break;
            case (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock"):
                console.log("You Lose! Rock beats scissors.")
                computerScore++;
                break;
        }
    }
    playRound(getUserChoice(), getComputerChoice())
    playRound(getUserChoice(), getComputerChoice())
    playRound(getUserChoice(), getComputerChoice())
    playRound(getUserChoice(), getComputerChoice())
    playRound(getUserChoice(), getComputerChoice())

    console.log(`Game Over! Score - User: ${userScore} Computer: ${computerScore}`)
}

playGame();