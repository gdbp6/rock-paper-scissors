
const body = document.querySelector("body");
body.setAttribute("style",
    "display: flex; background-color: grey; justify-content: center; align-content: center;"
);

const programContainer = document.createElement("div");
programContainer.setAttribute("style",
    "background-color: white; margin: 100px; width: 300px; height: 350px; border-radius: 25px;"
);
body.appendChild(programContainer);

const heading = document.createElement("p");
heading.textContent = "Rock, Paper, Scissor!";
heading.setAttribute("style",
    "text-align: center; font-weight: bold; padding: 10px"
);
programContainer.appendChild(heading);

const buttonContainer = document.createElement("div");
buttonContainer.setAttribute("style",
    "display: flex; justify-content: space-evenly; padding: 20px; background-color: yellow"
)
programContainer.appendChild(buttonContainer);

const rockButton = document.createElement("button");
rockButton.textContent = "rock";
rockButton.setAttribute("id", "rock");
rockButton.setAttribute("style", "border-radius: 10px; width: 80px")
buttonContainer.appendChild(rockButton);

const paperButton = document.createElement("button");
paperButton.textContent = "paper";
paperButton.setAttribute("id", "paper")
paperButton.setAttribute("style", "border-radius: 10px; width: 80px")
buttonContainer.appendChild(paperButton);

const scissorButton = document.createElement("button");
scissorButton.textContent = "scissor";
scissorButton.setAttribute("id", "scissor");
scissorButton.setAttribute("style", "border-radius: 10px; width: 80px")
buttonContainer.appendChild(scissorButton);

const resultDiv = document.createElement("div");
resultDiv.setAttribute("style",
    "padding: 20px; text-align: center"
);
programContainer.appendChild(resultDiv);

const currentScore = document.createElement("div");
currentScore.setAttribute("style",
    "padding: 20px; text-align: center"
);
programContainer.appendChild(currentScore);

const finalScore = document.createElement("div");
finalScore.setAttribute("style",
    "padding: 20px; text-align: center; font-weight: bold"
);
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

let getHumanChoice = '';

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

    currentScore.textContent = `You: ${humanScore}, Computer: ${computerScore}`

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
    getHumanChoice = e.target.id;
    playRound(getHumanChoice, getComputerChoice());
});

