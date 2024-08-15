console.log("Let's play Rock, Paper, Scissors!");

let humanScore = 0;
let computerScore = 0;

// Getting computer input
function getComputerChoice() {
    let compChoices = ["rock", "paper", "scissors"]
    let computerChoice = Math.floor(Math.random() * compChoices.length)
    return compChoices[computerChoice]
}


// Getting human input
function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, or scissors?").toLowerCase()
    if(humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        console.log("You chose " + humanChoice + "!");
    }
    else {
        console.log("Entry not recognised, please try again!");
    }
    return humanChoice
}


//Choosing a winner
function playRound(humanChoice, computerChoice) {
    if(humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        console.log("Rock beats scissors! You win!");
    }
    else if(humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        console.log("Paper beats rock. You lose :(");
    }
    else if(humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log("Paper beats rock! You win!");
    }
    else if(humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        console.log("Scissors beats paper. You lose :(");
    }
    else if(humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log("Scissors beats paper! You win!");
    }
    else if(humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        console.log("Scissors beats rock. You lose :(");
    }
    else {
        console.log("It's a tie!");
    }
}


function playGame() {
    for (i = 0; i < 5; i++) {
        const result = playRound(getHumanChoice(), getComputerChoice());
        }
    console.log("Final Results: Your score: " + humanScore + ". Computer score: " + computerScore + ".");
    if(humanScore > computerScore) {
        console.log("You win the game!");
    }
    else if(humanScore < computerScore) {
        console.log("You lose the game:(");
    }
    else {
        console.log("It's an overall tie.");
    }
}

playGame();