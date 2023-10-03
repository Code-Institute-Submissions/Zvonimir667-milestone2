const buttons = document.getElementsByTagName("button");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const lizard = "lizard";
const spock = "spock";

for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}

function playGame(playerChoice) {
    let computerChoiceIndex = Math.floor(Math.random() * 5);
    let computerChoice = choices[computerChoiceIndex];


    let result = checkWinner(playerChoice, computerChoice);


    updateScores(result);
}

function checkWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "The computer also chose " + computerChoice + ":" + "<br>" + "the result is a tie! :\|";
    } else if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            return "paper covers rock <br> You Lose :\(";
        } else if (computerChoice === "scissors") {
            return "rock crushes scissors <br> You Win! :\)";
        } else if (computerChoice === "lizard") {
            return "rock crushes lizard <br> You Win! :\) ";
        } else {
            return "spock vaporizes rock <br> You Lose :\(";
        }
    } else if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            return "paper covers rock <br> You Win! :\)";
        } else if (computerChoice === "scissors") {
            return "scissors cut paper <br> You Lose :\(";
        } else if (computerChoice === "lizard") {
            return "lizard eats paper <br> You Lose :\(";
        } else {
            return "paper disproves spock <br> You Win! :\)";
        }
    } else if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            return "rock crushes scissors <br> You Lose :\(";
        } else if (computerChoice === "paper") {
            return "scissors cut paper <br> You Win! :\)";
        } else if (computerChoice === "lizard") {
            return "scissors decapitate lizard <br> You Win! :\)";
        } else {
            return "spock smashes scissors <br> You Lose :\(";
        }
    } else if (playerChoice === "lizard") {
        if (computerChoice === "rock") {
            return "rock crushes lizard <br> You Lose :\(";
        } else if (computerChoice === "paper") {
            return "lizard eats paper <br> You Win! :\)";
        } else if (computerChoice === "scissors") {
            return "scissors decapitate lizard <br> You Lose :\(";
        } else {
            return "lizard poisons spock <br> You Win! :\)";
        }
    } else if (playerChoice === "spock") {
        if (computerChoice === "rock") {
            return "spock vaporizes rock <br> You Win! :\)";
        } else if (computerChoice === "paper") {
            return "paper disproves spock <br> You Lose :\(";
        } else if (computerChoice === "scissors") {
            return "spock smashes scissors <br> You Win! :\) ";
        } else {
            return "lizard poisons spock <br> You Lose :\(";
        }
    }
};

function updateScores