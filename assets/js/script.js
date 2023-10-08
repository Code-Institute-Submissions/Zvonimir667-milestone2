const buttons = document.getElementsByClassName("btn");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const playerImage = document.getElementById("player-img");
const computerImage = document.getElementById("computer-img");
const choiceImages = {
    rock: "rock.png",
    paper: "paper.png",
    scissors: "scissors.png",
    lizard: "lizard.png",
    spock: "spock.png",
};


for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}

function playGame(playerChoice) {
    console.log("Player Choice:", playerChoice);

    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];

    let computerChoiceIndex = Math.floor(Math.random() * 5);
    let computerChoice = choices[computerChoiceIndex];
    console.log("Computer Choice:", computerChoice);

    computerImage.src = `assets/images/${choices[computerChoiceIndex]}.png`;
    computerImage.alt = choices[computerChoiceIndex];


    let result = checkWinner(choices[playerChoice], choices[computerChoiceIndex]);
    console.log("Result:", result);

    updateScores(result);

}


function checkWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Result is a tie!";
    } else if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            return "Paper covers rock <br> You Lose";
        } else if (computerChoice === "scissors") {
            return "Rock crushes scissors <br> You Win!";
        } else if (computerChoice === "lizard") {
            return "Rock crushes lizard <br> You Win!";
        } else {
            return "Spock vaporizes rock <br> You Lose";
        }

    } else if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            return "Paper covers rock <br> You Win!";
        } else if (computerChoice === "scissors") {
            return "Scissors cut paper <br> You Lose";
        } else if (computerChoice === "lizard") {
            return "Lizard eats paper <br> You Lose";
        } else {
            return "Paper disproves Spock <br> You Win!";
        }
    } else if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            return "Rock crushes scissors <br> You Lose";
        } else if (computerChoice === "paper") {
            return "Scissors cut paper <br> You Win!";
        } else if (computerChoice === "lizard") {
            return "Scissors decapitate lizard <br> You Win!";
        } else {
            return "Spock smashes scissors <br> You Lose";
        }
    } else if (playerChoice === "lizard") {
        if (computerChoice === "rock") {
            return "Rock crushes lizard <br> You Lose";
        } else if (computerChoice === "paper") {
            return "Lizard eats paper <br> You Win!";
        } else if (computerChoice === "scissors") {
            return "Scissors decapitate lizard <br> You Lose";
        } else {
            return "Lizard poisons Spock <br> You Win!";
        }
    } else if (playerChoice === "spock") {
        if (computerChoice === "rock") {
            return "Spock vaporizes rock <br> You Win!";
        } else if (computerChoice === "paper") {
            return "Paper disproves Spock <br> You Lose";
        } else if (computerChoice === "scissors") {
            return "Spock smashes scissors <br> You Win!";
        } else {
            return "Lizard poisons Spock <br> You Lose";
        }
    }
}

function updateScores(result) {
    if (result.includes("You Win")) {
        playerScore.innerText = parseInt(playerScore.innerText) + 1;
    } else if (result.includes("You Lose")) {
        computerScore.innerText = parseInt(computerScore.innerText) + 1;
    } else {

    }

    // Display the result
    document.querySelector('.result-area').innerHTML = result;
}


