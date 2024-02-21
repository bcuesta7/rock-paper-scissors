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
let playerSelection = prompt("Which option do you choose: Rock, Paper or Scissors?").toLowerCase();
let computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection){
        return `Tie! You both choose ${playerSelection}`;
    }else if(playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper"){
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }else if(playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock"){
        computerScore++;
        return `You Loose! ${computerSelection} beats ${playerSelection}`;
    }else{
        return `${playerSelection} is not an option`;
    }
  }

function playGame(){
  for (let i = 0; i<5; i++) { 
    playerSelection = prompt("Which option do you choose: Rock, Paper or Scissors?").toLowerCase();
    computerSelection = getComputerChoice();

    console.log(`${playerSelection} VS ${computerSelection}`)
    console.log(playRound(playerSelection, computerSelection));
    console.log(playerScore, computerScore)
    }

  if(playerScore > computerScore){
       return "You are the winner! :)";
    }else if(playerScore == computerScore){
       return "This game is a tie!";
    }else{
        return "You loose the game :(";
    }
}

console.log(playGame());