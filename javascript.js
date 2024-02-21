//Rock Paper Scissors

/*
1. Computer choices one option (Rock, Paper, Scissors)
2. User inputs "Rock", "Paper" or "Scissors"
3. If computer wins return "You Loose! [computer choice] wins [player choice]"
4. If player wins return "You Win! [player choice] wins [computer choice]"
5. If computer selection and player selection are equal, return "Tie!"

Rock beats Scissors
Paper beats Rock
Scissors beats Paper

*/

let choice = ["rock", "paper", "scissors"];
const playerSelection = prompt("Which option do you choose: Rock, Paper or Scissors?").toLowerCase();
const computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

function playGame(){
    for(let i = 0; i<=5; i++){
        playerSelection;
        computerSelection;
    }
  }

function getComputerChoice(){
    return choice[Math.floor(Math.random() * choice.length)];
}

console.log(playerSelection);
console.log(computerSelection);

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection){
        return `Tie! You both choose ${playerSelection}`;
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }else if(playerSelection == "rock" && computerSelection == "paper"){
        computerScore++;
        return `You Loose! ${computerSelection} beats ${playerSelection}`
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        computerScore++;
        return `You Loose! ${computerSelection} beats ${playerSelection}`
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        computerScore++;
        return `You Loose! ${computerSelection} beats ${playerSelection}`
    }else{
        return `${playerSelection} is not an option`
    }
  }
  
  console.log(playRound(playerSelection, computerSelection));
  console.log(playerScore, computerScore);

  
