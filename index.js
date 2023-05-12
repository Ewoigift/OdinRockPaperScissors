let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".results >p ");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const message_p = document.querySelector(".message");



function getComputerSelection() {
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";

}

function win(userSelection, computerSelection) {
    const smallUserWord = "you".fontsize(3).sub();
    const smallComputerWord = "comp".fontsize(3).sub();
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userSelection)}${smallUserWord} beats ${convertToWord(computerSelection)}${smallComputerWord}. `;
    document.getElementById(userSelection).classList.add('green-glow');
    setTimeout(function() { document.getElementById(userSelection).classList.remove('green-glow') }, 300);

    if (userScore === 1) {
        message_p.innerHTML = `Lets go!!!You won!🔥`;
    } else if (userScore === 2) {
        message_p.innerHTML = `You,re pretty good at this!🤩`;
    } else if (userScore === 3) {
        message_p.innerHTML = `keep pushing, you got this!💪`;
    } else if (userScore === 4) {
        message_p.innerHTML = `One more you're the winner!🏆`;
    }

}

function lose(userSelection, computerSelection) {
    const smallUserWord = "you".fontsize(3).sub();
    const smallComputerWord = "comp".fontsize(3).sub();
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userSelection)}${smallUserWord} loses to ${convertToWord(computerSelection)}${smallComputerWord}. `;
    document.getElementById(userSelection).classList.add('red-glow');
    setTimeout(function() { document.getElementById(userSelection).classList.remove('red-glow') }, 300);
    if (computerScore === 1) {
        message_p.innerHTML = `Oh no you lost. It's okay you got this!!😤`;
    } else if (computerScore === 2) {
        message_p.innerHTML = `Don't worry keep you head up!💪`;
    } else if (computerScore === 3) {
        message_p.innerHTML = `You do it, give it another shot!`;
    } else if (computerScore === 4) {
        message_p.innerHTML = `It's match point 😬`;
    }
}

function draw(userSelection, computerSelection) {
    const smallUserWord = "you".fontsize(3).sub();
    const smallComputerWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userSelection)}${smallUserWord} equals ${convertToWord(computerSelection)}${smallComputerWord}.`;
    document.getElementById(userSelection).classList.add('grey-glow');
    setTimeout(function() { document.getElementById(userSelection).classList.remove('grey-glow') }, 300);
    message_p.innerHTML = `It's a tie`;
}



function game(userSelection) {
    const computerSelection = getComputerSelection();
    switch (userSelection + computerSelection) {
        case "rs":
        case "pr":
        case "sp":
            win(userSelection, computerSelection);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userSelection, computerSelection)
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userSelection, computerSelection);
            break;

    }
}




function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissors_div.addEventListener('click', function() {
        game("s");
    })
}

main();