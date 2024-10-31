let buttons = document.querySelectorAll(".options");
let message = document.querySelector("#message");
let messageContainer = document.querySelector(".message_container");
let yourScore = document.querySelector("#your_score");
let compScore = document.querySelector("#comp_score");

buttons.forEach((button) => {
    button.addEventListener("click" , () =>{
        let userChoice = button.id;
        let compChoice = randomCompChoice();
        console.log(compChoice);

        if (userChoice === compChoice){
            gameDraw(userChoice);
        }else{
            if (userChoice === "rock"){
                if(compChoice === "paper"){
                    youLose(userChoice, compChoice);
                }else{
                    youWin(userChoice, compChoice);
                }
            }
            if (userChoice === "paper"){
                if(compChoice === "scissors"){
                    youLose(userChoice, compChoice);
                }else{
                    youWin(userChoice, compChoice);
                }
            }
            if (userChoice === "scissors"){
                if(compChoice === "rock"){
                    youLose(userChoice, compChoice);
                }else{
                    youWin(userChoice, compChoice);
                }
            }
        }
    })
})

const randomCompChoice = () => {
    const options = ["rock","paper","scissors"];
    let randomindex = Math.floor(Math.random() * options.length);
    return(options[randomindex]);
}

const gameDraw = (userChoice) => {
    message.innerText = `Your choice : ${userChoice} , Computer's choice : ${userChoice} : Game draw `;
    messageContainer.classList.remove("hide");
}

const youWin = (userChoice, compChoice) => {
    message.innerText = `Your choice :${userChoice} , Computer's choice:${compChoice} : You win ! `;
    messageContainer.classList.remove("hide");
    yourScore.innerText = parseInt(yourScore.innerText) + 1 ;
}

const youLose = (userChoice, compChoice) => {
    message.innerText = `Your choice : ${userChoice} , Computer's choice : ${compChoice} : You lose `;
    messageContainer.classList.remove("hide");
    compScore.innerText = parseInt(compScore.innerText) + 1 ; 
}