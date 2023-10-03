const buttons = document.getElementsByTagName("button");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const choices = ["rock", "paper", "scissors", "lizard", "spock"];

for (let button of buttons) {
    button.addEventListener("click", function() {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    })
}

function playGame(playerChoice) {
    let computerChoice = Math.floor(Math.random() * 5);

    let result = checkWinner(choices[computerChoice], choices[playerChoice]);

    updateScores(result)
}