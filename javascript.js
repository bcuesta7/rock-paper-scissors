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

function getComputerChoice(){
    return choice[Math.floor(Math.random() * choice.length)];
}

console.log(playerSelection);
console.log(computerSelection);

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection){
        return `Tie! You both choose ${playerSelection}`;
    }else if(playerSelection == "rock" && computerSelection == "paper"){
        return `You Loose! ${computerSelection} beats ${playerSelection}`
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        return `You Loose! ${computerSelection} beats ${playerSelection}`
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }    
  }
  
  console.log(playRound(playerSelection, computerSelection));
