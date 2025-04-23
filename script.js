console.log("hello world");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getHumanChoice() {
    let input = prompt("Choose: Rock, Paper, or Scissors").toLowerCase();
    return input;
}

function playGame() {
    // Moved scores INSIDE playGame (as per assignment)
    let humanScore = 0;
    let computerScore = 0;

    // Moved playRound INSIDE playGame (as per assignment)
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        }
    }

    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    // Declare winner
    console.log(`Final Scores - You: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You win the game! 🎉");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game! 😢");
    } else {
        console.log("It's a tie game! 🤝");
    }
}

playGame(); // Start the game