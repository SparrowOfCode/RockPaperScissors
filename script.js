const body = document.querySelector('body');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resultsDiv = document.createElement('div');
const resultsPara = document.createElement('p');
const scoreH2 = document.createElement('h2');
const userPara = document.createElement('p');
const computerPara = document.createElement('p');
const finalScore = document.createElement('h2');

body.appendChild(resultsDiv);


let computerScore = 0;
let userScore = 0;

function getComputerChoice() {
    const randNum = Math.floor(Math.random() * 3) + 1;
    if (randNum === 1) {
        computerPara.textContent = "Computer: Rock";
        resultsDiv.appendChild(computerPara);
        return "Rock"
    } else if (randNum === 2) {
        computerPara.textContent = "Computer: Paper";
        resultsDiv.appendChild(computerPara);
        return "Paper"
    } else {
        computerPara.textContent = "Computer: Scissors";
        resultsDiv.appendChild(computerPara);
        return "Scissors"
    }
}

function getUserChoice(choice) {
    if (choice === "Rock") {
        userPara.textContent = "You: Rock";
        resultsDiv.appendChild(userPara);
        return "Rock"
    } else if (choice === "Paper") {
        userPara.textContent = "You: Paper";
        resultsDiv.appendChild(userPara);
        return "Paper"
    } else if (choice === "Scissors") {
        userPara.textContent = "You: Scissors";
        resultsDiv.appendChild(userPara);
        return "Scissors"
    } else {
        console.log('Could not read input')
    }
}

function isGameOver() {
    userPara.remove();
    computerPara.remove();
    resultsPara.remove();
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    if (userScore === 5) {
        finalScore.textContent = "CONGRATULATIONS! YOU WIN!";
        finalScore.style.color = "green"
        body.appendChild(finalScore);
    } else {
        finalScore.textContent = "GAME OVER! COMPUTER WINS!";
        finalScore.style.color = "red"
        body.appendChild(finalScore);
    }
}

function playRound(humanChoice, computerChoice) {
    switch (true) {
        case (userScore === 5 || computerScore === 5):
            return isGameOver();
        case (humanChoice === computerChoice):
            resultsPara.textContent = "Its a tie!"
            resultsDiv.appendChild(resultsPara);
            scoreH2.textContent = `User: ${userScore} Computer: ${computerScore}`
            resultsDiv.appendChild(scoreH2);
            break;
        case (humanChoice === "Paper" && computerChoice === "Rock"):
            resultsPara.textContent = "You Win! Paper beats rock."
            resultsDiv.appendChild(resultsPara);
            userScore++;
            scoreH2.textContent = `User: ${userScore} Computer: ${computerScore}`
            resultsDiv.appendChild(scoreH2);
            break;
        case (humanChoice === "Paper" && computerChoice === "Scissors"):
            resultsPara.textContent = "You Lose! Scissors beats paper."
            resultsDiv.appendChild(resultsPara);
            computerScore++;
            scoreH2.textContent = `User: ${userScore} Computer: ${computerScore}`
            resultsDiv.appendChild(scoreH2);
            break;
        case (humanChoice === "Rock" && computerChoice === "Scissors"):
            resultsPara.textContent = "You Win! Rock beats scissors."
            resultsDiv.appendChild(resultsPara);
            userScore++;
            scoreH2.textContent = `User: ${userScore} Computer: ${computerScore}`
            resultsDiv.appendChild(scoreH2);
            break;
        case (humanChoice === "Rock" && computerChoice === "Paper"):
            resultsPara.textContent = "You Lose! Paper beats rock."
            resultsDiv.appendChild(resultsPara);
            computerScore++;
            scoreH2.textContent = `User: ${userScore} Computer: ${computerScore}`
            resultsDiv.appendChild(scoreH2);
            break;
        case (humanChoice === "Scissors" && computerChoice === "Paper"):
            resultsPara.textContent = "You Win! Scissors beats paper."
            resultsDiv.appendChild(resultsPara);
            userScore++;
            scoreH2.textContent = `User: ${userScore} Computer: ${computerScore}`
            resultsDiv.appendChild(scoreH2);
            break;
        case (humanChoice === "Scissors" && computerChoice === "Rock"):
            resultsPara.textContent = "You Lose! Rock beats scissors."
            resultsDiv.appendChild(resultsPara);
            computerScore++;
            scoreH2.textContent = `User: ${userScore} Computer: ${computerScore}`
            resultsDiv.appendChild(scoreH2);
            break;
    }
}

rockBtn.addEventListener('click', function () {
    playRound(getUserChoice(rockBtn.value), getComputerChoice())
});
paperBtn.addEventListener('click', function () {
    playRound(getUserChoice(paperBtn.value), getComputerChoice())
});
scissorsBtn.addEventListener('click', function () {
    playRound(getUserChoice(scissorsBtn.value), getComputerChoice())
});