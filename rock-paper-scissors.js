function getComputerChoice() {
    let randomNum = Math.random() * 100;
    if (randomNum < 34) {
        return "Rock";
    } else if (randomNum < 67) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let userInput = prompt("Enter 'rock', 'paper', or 'scissors': ").toLowerCase();
    switch (userInput) {
        case 'rock': return 'Rock';
        case 'paper': return 'Paper';
        case 'scissors': return 'Scissors';
        case 'scissor': return 'Scissors';
    }
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("Draw");
        } else if (humanChoice === 'Rock' && computerChoice === 'Paper') {
            console.log(`You lose. ${computerChoice} beats ${humanChoice}.`);
            computerScore++;
        } else if (humanChoice === 'Rock' && computerChoice === 'Scissors') {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            humanScore++;
        } else if (humanChoice === 'Paper' && computerChoice === 'Scissors') {
            console.log(`You lose. ${computerChoice} beats ${humanChoice}.`);
            computerScore++;
        } else if (humanChoice === 'Paper' && computerChoice === 'Rock') {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            humanScore++;
        } else if (humanChoice === 'Scissors' && computerChoice === 'Rock') {
            console.log(`You lose. ${computerChoice} beats ${humanChoice}.`);
            computerScore++;
        } else if (humanChoice === 'Scissors' && computerChoice === 'Paper') {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            humanScore++;
        } else {
            console.log("Invalid input.")
        }
    }   

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());


    if (humanScore === computerScore) {
        console.log(`You've drawn ${humanScore} to ${computerScore}. `)
    } else if (humanScore > computerScore) {
        console.log(`You've won ${humanScore} to ${computerScore}!`);
    } else {
        console.log(`You've lost ${humanScore} to ${computerScore}. `)
    }
}

playGame();