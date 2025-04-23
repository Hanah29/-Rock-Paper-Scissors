// console.log("hello world");

// function getComputerChoice() {
//     const choices = ["rock", "paper", "scissors"];
//     const randomIndex = Math.floor(Math.random() * 3);
//     return choices[randomIndex];
// }

// function getHumanChoice() {
//     let input = prompt("Choose: Rock, Paper, or Scissors").toLowerCase();
//     return input;
// }

// function playGame() {
//     // Moved scores INSIDE playGame (as per assignment)
//     let humanScore = 0;
//     let computerScore = 0;

//     // Moved playRound INSIDE playGame (as per assignment)
//     function playRound(humanChoice, computerChoice) {
//         humanChoice = humanChoice.toLowerCase();
//         if (humanChoice === computerChoice) {
//             console.log("It's a tie!");
//         } else if (
//             (humanChoice === "rock" && computerChoice === "scissors") ||
//             (humanChoice === "paper" && computerChoice === "rock") ||
//             (humanChoice === "scissors" && computerChoice === "paper")
//         ) {
//             humanScore++;
//             console.log(`You win! ${humanChoice} beats ${computerChoice}`);
//         } else {
//             computerScore++;
//             console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
//         }
//     }

//     // Play 5 rounds
//     for (let i = 0; i < 5; i++) {
//         const humanChoice = getHumanChoice();
//         const computerChoice = getComputerChoice();
//         playRound(humanChoice, computerChoice);
//     }

//     // Declare winner
//     console.log(`Final Scores - You: ${humanScore}, Computer: ${computerScore}`);
//     if (humanScore > computerScore) {
//         console.log("You win the game! 🎉");
//     } else if (computerScore > humanScore) {
//         console.log("Computer wins the game! 😢");
//     } else {
//         console.log("It's a tie game! 🤝");
//     }
// }

// playGame(); // Start the game




let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    const resultsDiv = document.getElementById('results');
    let roundResult = '';

    if (humanChoice === computerChoice) {
        roundResult = `Tie! Both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        roundResult = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        roundResult = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    resultsDiv.innerHTML += `<p>${roundResult}</p>`;

    // Check for winner
    if (humanScore === 5 || computerScore === 5) {
        const winner = humanScore === 5 ? "You" : "Computer";
        resultsDiv.innerHTML += `<h2>${winner} won the game! 🎉</h2>`;
        // Disable buttons after game ends
        document.querySelectorAll('button').forEach(btn => btn.disabled = true);
    }

    // Update running score
    resultsDiv.innerHTML += `<p>Score: You ${humanScore} - Computer ${computerScore}</p>`;
}

// Add event listeners to buttons
document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));