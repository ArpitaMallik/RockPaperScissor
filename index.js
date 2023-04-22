const userScore_div = document.querySelector("#user-score");
const compScore_div = document.querySelector("#comp-score");
const scoreBoard = document.querySelector(".score")
const result = document.querySelector("#result");
const rock = document.querySelector("#r");
const paper = document.querySelector("#p");
const scissor = document.querySelector("#s");
const makeMove = document.querySelector(".make_move");
const pcChoice = document.querySelector("#pc_choice");

let userScore = 0;
let compScore = 0;

function comp_turn(){
    const choices = ["r", "p", "s"];
    const randNum = Math.floor(Math.random() * 3);
    return choices[randNum];
}

function win(){
    userScore++;
    userScore_div.innerHTML = userScore;
    compScore_div.innerHTML = compScore;
    result.innerHTML = "You win!";
    // document.querySelector(userChoice).classList.add("green-glow");
}
function lose(){
    compScore++;
    userScore_div.innerHTML = userScore;
    compScore_div.innerHTML = compScore;
    result.innerHTML = "You lost!";
}

function draw(){
    userScore_div.innerHTML = userScore;
    compScore_div.innerHTML = compScore;
    result.innerHTML = "It's a draw!";
}

function game(userChoice){
    const comp_choice = comp_turn();
    if(comp_choice=="r"){
        pcChoice.innerHTML = `The computer chose rock!`;
    }
    else if(comp_choice=="p"){
        pcChoice.innerHTML = `The computer chose paper!`;
    }
    else if(comp_choice=="s"){
        pcChoice.innerHTML = `The computer chose scissor!`;
    }
    switch(userChoice+comp_choice){
        case "rs":
        case "pr":
        case "sp":
            win();
            break;
        case "sr":
        case "rp":
        case "ps":
            lose();
            break;
        case "ss":
        case "pp":
        case "rr":
            draw();
            break;
    }
    
}


rock.addEventListener("click", ()=>{
    game("r");
    
})

paper.addEventListener("click", ()=>{
    game("p");
})

scissor.addEventListener("click", ()=>{
    game("s");
})