function getComputerChoice(){
    // No input
    // Randomly Get Desired output
    num = Math.floor(Math.random() * (3 - 0)) + 0
    if(num == 0){
        return "rock"
    }else if (num == 1){
        return "paper"
    }else{
        return "scissor"
    }
    // output will be either paper,scissors or rock

}



function playRound(playerSelection,computerSelection){
    // Input will be player chose & computer choice aka strings
    user = playerSelection.toLowerCase()
    cpu = computerSelection.toLowerCase()
    // Compare both inputs, apply rock paper scissors game rules here
    
    if(user == cpu){
        return "It's a draw"
    } else if((user == 'rock' & cpu == 'paper') || (user =='scissor' & cpu =='rock')){
        return `You Lose! ${cpu} beats ${user}`
    } else if((user == 'paper' & cpu == 'rock') || (user =='rock' & cpu =='scissor')){
        return `You Win!!! ${user} beats ${cpu}`
    } else{
        return "Error Occurred"
    }
}


function game(){
    for(let i=1; i<5; i++){
        console.log(`Round ${i}`)
    }
    return continue
}


// Global Variables
// const playerSelection = 'rock';

// const computerSelection =  getComputerChoice();

// console.log(playRound(playerSelection, computerSelection));

console.log(game())