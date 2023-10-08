const buttons = document.getElementsByClassName("btn");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const playerImage = document.getElementById("player-img");
const computerImage = document.getElementById("computer-img");



for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}

function playGame(playerChoice) {

    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];

    let computerChoiceIndex = Math.floor(Math.random() * 5);
    let computerChoice = choices[computerChoiceIndex];

    computerImage.src = `assets/images/${choices[computerChoiceIndex]}.png`;
    computerImage.alt = choices[computerChoiceIndex];


    let result = checkWinner(choices[playerChoice], choices[computerChoice]);

    updateScores(result);

}


function checkWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "The computer also chose " + computerChoice + ":" + "<br>" + "the result is a tie!";
    } else if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            return "paper covers rock <br> You Lose";
        } else if (computerChoice === "scissors") {
            return "rock crushes scissors <br> You Win!";
        } else if (computerChoice === "lizard") {
            return "rock crushes lizard <br> You Win!";
        } else {
            return "spock vaporizes rock <br> You Lose";
        }
    } else if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            return "paper covers rock <br> You Win!";
        } else if (computerChoice === "scissors") {
            return "scissors cut paper <br> You Lose";
        } else if (computerChoice === "lizard") {
            return "lizard eats paper <br> You Lose";
        } else {
            return "paper disproves spock <br> You Win!";
        }
    } else if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            return "rock crushes scissors <br> You Lose";
        } else if (computerChoice === "paper") {
            return "scissors cut paper <br> You Win!";
        } else if (computerChoice === "lizard") {
            return "scissors decapitate lizard <br> You Win!";
        } else {
            return "spock smashes scissors <br> You Lose";
        }
    } else if (playerChoice === "lizard") {
        if (computerChoice === "rock") {
            return "rock crushes lizard <br> You Lose";
        } else if (computerChoice === "paper") {
            return "lizard eats paper <br> You Win!";
        } else if (computerChoice === "scissors") {
            return "scissors decapitate lizard <br> You Lose";
        } else {
            return "lizard poisons spock <br> You Win!";
        }
    } else if (playerChoice === "spock") {
        if (computerChoice === "rock") {
            return "spock vaporizes rock <br> You Win!";
        } else if (computerChoice === "paper") {
            return "paper disproves spock <br> You Lose";
        } else if (computerChoice === "scissors") {
            return "spock smashes scissors <br> You Win!";
        } else {
            return "lizard poisons spock <br> You Lose";
        }
    }
};

function updateScores(result) {
    if (result.includes("You Win")) {
        playerScore.innerText = parseInt(playerScore.innerText) + 1;
    } else if (result.includes("You Lose")) {
        computerScore.innerText = parseInt(computerScore.innerText) + 1;
    }

    // Display the result
    document.querySelector('.result-area').innerHTML = result;
}


