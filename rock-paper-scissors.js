const body = document.querySelector("body");

const programContainer = document.createElement("div");
body.appendChild(programContainer);

const buttonContainer = document.createElement("div");
programContainer.appendChild(buttonContainer);

const rockButton = document.createElement("button");
rockButton.textContent = "rock";
rockButton.setAttribute("id", "rock");
buttonContainer.appendChild(rockButton);

const paperButton = document.createElement("button");
paperButton.textContent = "paper";
paperButton.setAttribute("id", "paper")
buttonContainer.appendChild(paperButton);

const scissorButton = document.createElement("button");
scissorButton.textContent = "scissor";
scissorButton.setAttribute("id", "scissor");
buttonContainer.appendChild(scissorButton);

const resultDiv = document.createElement("div");
programContainer.appendChild(resultDiv);

const currentScore = document.createElement("div");
programContainer.appendChild(currentScore);

const finalScore = document.createElement("div");
programContainer.appendChild(finalScore);


function getComputerChoice() {
    let randomNum = Math.random() * 100;
    if (randomNum < 34) {
        return "rock";
    } else if (randomNum < 67) {
        return "paper";
    } else {
        return "scissor";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        resultDiv.textContent = `Draw. Both drawn ${humanChoice}`;
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        resultDiv.textContent = `You lose. ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    } else if (humanChoice === 'rock' && computerChoice === 'scissor') {
        resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'scissor') {
        resultDiv.textContent = `You lose. ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    } else if (humanChoice === 'scissor' && computerChoice === 'rock') {
        resultDiv.textContent = `You lose. ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    } else if (humanChoice === 'scissor' && computerChoice === 'paper') {
        resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    }

    currentScore.textContent = `Human: ${humanScore}, Computer: ${computerScore}`

    if (humanScore === 5) {
        finalScore.textContent = `You've won ${humanScore} to ${computerScore}`;
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        finalScore.textContent = `You've lost ${humanScore} to ${computerScore}`;
        humanScore = 0;
        computerScore = 0;
    } else {
        finalScore.textContent = '';
    }
}   

buttonContainer.addEventListener("click", (e) => {
    let getHumanChoice = e.target.id;
    playRound(getHumanChoice, getComputerChoice());
});

