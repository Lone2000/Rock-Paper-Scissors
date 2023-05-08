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
    } else if((user == 'rock' && cpu == 'paper') || (user =='scissor' && cpu =='rock') || (user == 'paper' && cpu == 'scissor')){
        return `You Lose! ${cpu} beats ${user}`;
    } else if((user == 'paper' && cpu == 'rock') || (user =='rock' && cpu =='scissor') || (user == 'scissor' && cpu == 'paper')){
        return `You Win!!! ${user} beats ${cpu}`;
    } else{
        return "Error Occurred";
    }
}


function game(){
    let user_score = 0;
    let cpu_score = 0;

    
    const buttons = document.querySelectorAll('.btn');
    console.log(buttons);

    // Add Event Listener on each button
    buttons.forEach(button =>
        button.addEventListener('click', (e)=>{
            let user_input = e.target.id;
            let result = playRound(user_input, getComputerChoice());
            console.log(result);
    }))
//     // Round Loop For 5 Times
//     // for(let i=1; i<6; i++){
//     //     result = playRound(playerSelection,computerSelection);
//     //     if(result == "Lose"){
//     //         cpu_score += 1;
//     //     } else if(result == "Win"){
//     //         user_score += 1;
//     //     } 
//     // console.log(result);

//     // Get Input Again After Each Round
//     if(i == 5){
//         break
//     }
//     playerSelection = prompt();
//     computerSelection = getComputerChoice(); 
// }
    // 5-Series Result Output
    if(user_score > cpu_score){
        console.log("You've won the best of 5")
    } else{
        console.log("You've lost the dual")
    }
}



// Global Variables


console.log(game())