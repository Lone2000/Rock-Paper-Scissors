// Global Variables
let user_score = 0;
let cpu_score = 0;

const buttons = document.querySelectorAll('.btn');
const button = buttons.forEach((button) => button.addEventListener('click', (e)=>{
    // console.log(e.target.id);

    playRound(e.target.id, getComputerChoice());
}))




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



function playRound(user,cpu){
    // Console.log arguments aka Inputs
    // console.log(arguments);


    // Create Result Template for display
    const results = document.querySelector(".results");


    // Compare both inputs, apply rock paper scissors game rules here
    
    if(user == cpu){
        results.innerHTML = `<p>Draw<br> <p>User Score: ${user_score} <br> <p>Cpu Score: ${cpu_score}</p>`;

    } else if((user == 'rock' && cpu == 'paper') || (user =='scissor' && cpu =='rock') || (user == 'paper' && cpu == 'scissor')){
        cpu_score += 1;
        results.innerHTML = `<p>Lose<br> <p>User Score: ${user_score} <br> <p>Cpu Score: ${cpu_score}</p>`;

    } else if((user == 'paper' && cpu == 'rock') || (user =='rock' && cpu =='scissor') || (user == 'scissor' && cpu == 'paper')){
        user_score +=1;
        results.innerHTML = `<p>Win<br> <p>User Score: ${user_score} <br> <p>Cpu Score: ${cpu_score}</p>`;
    } else{
        results.innerHTML = 'AN ERROR OCCURRED';
    }

    // Check should only occur when 5 rounds have been played
    if(user_score + cpu_score == 5){
        if(user_score > cpu_score){
            results.innerHTML = `<p>You've won the best of five!!</p>`;
            buttons.forEach(function (button){
                button.setAttribute('disabled','');            
            });
        }else{
            results.innerHTML = `<p>You've Lost the best of five!</p> <br> <p>Starting new game in 3 seconds</p>`;
            buttons.forEach(function (button){
                button.setAttribute('disabled','');            
            });
            setTimeout(function(){
                window.location.reload();
            }, 2000);
        }
    };

    // Disable Button
}

