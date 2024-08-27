console.log("Let's play Rock, Paper, Scissors!");

let humanScore = 0;
let computerScore = 0;
let scoreWindow = document.querySelector("#scores");

scoreWindow.innerHTML = humanScore + " : " + computerScore;

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
        document.getElementById("results").innerHTML = "Rock beats scissors! You win!" ;
    }
    else if(humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        document.getElementById("results").innerHTML = "Paper beats rock. You lose :(";
    }
    else if(humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        document.getElementById("results").innerHTML = "Paper beats rock! You win!";
    }
    else if(humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        document.getElementById("results").innerHTML = "Scissors beats paper. You lose :(";
    }
    else if(humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        document.getElementById("results").innerHTML = "Scissors beats paper! You win!";
    }
    else if(humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        document.getElementById("results").innerHTML = "Scissors beats rock. You lose :(";
    }
    else {
        document.getElementById("results").innerHTML = "It's a tie!";
    }
    scoreWindow.innerHTML = humanScore + " : " + computerScore;
}

//Showing the winner
function decideWinner() {
    if(humanScore === 5) {
        alert("You have won the game!");
    }
    else if(computerScore === 5) {
        alert("You have lost the game :(");
    }
    else {
        //do nothing
    }
}

//Clicking each button
const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
    decideWinner();

});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
    decideWinner();
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
    decideWinner();
});






