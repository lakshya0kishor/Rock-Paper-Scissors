let userScore = 0;
let computerScore = 0;
let drawScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#msg");

let userScorepara = document.querySelector('#user-score');
let compScorepara = document.querySelector('#comp-score');
let drawScorepara = document.querySelector('#draw');

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random()*3);
    return options[index];
}

const drawGame = (userChoice,compChoice) =>{
    drawScore++;
    drawScorepara.innerHTML = drawScore;
    msg.innerHTML = `game draw.`;
    msg.style.backgroundColor = "#081b31";
}

const youWin = (userChoice,compChoice) => {
    userScore++;
    userScorepara.innerHTML = userScore;
    msg.innerHTML = `you win!! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
}

const youLose = (userChoice,compChoice) => {
    computerScore++;
    compScorepara.innerHTML = computerScore;
    msg.innerHTML = `you lose!! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
}

const winner = (userChoice,compChoice) => {
    if(userChoice == compChoice){
        drawGame(userChoice,compChoice);
    }
    else if(userChoice === "rock"){
        if (compChoice === "paper") {
            youLose(userChoice,compChoice);
        }
        else if(compChoice === "scissors"){
            youWin(userChoice,compChoice);
        }
    }
    else if(userChoice === "paper"){
        if (compChoice === "rock") {
            youWin(userChoice,compChoice);
        }
        else if(compChoice === "scissors"){
            youLose(userChoice,compChoice);
        }
    }
    else if(userChoice === "scissors"){
        if (compChoice === "rock") {
            youLose(userChoice,compChoice);
        }
        else if(compChoice === "paper"){
            youWin(userChoice,compChoice);
        }
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click',() => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        const compChoice = genCompChoice();
        console.log("computer choice",compChoice);
        winner(userChoice,compChoice);
    })
});
