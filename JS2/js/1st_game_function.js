// Game with functions

const initGame = () => {
    const startGame = confirm("Shall we play rock, paper, or scissors?");
    startGame ? playGame() : alert("OK, maybe next time.");
};

const playGame = () => {
    while (true) {
        let playerChoice = getPlayerChoice();
        playerChoice = formatPlayerChoice(playerChoice);
        if (playerChoice === "") {
            invalidChoice();
            continue;
        }
        if (!playerChoice) {
            decidedNotToPlay();
            break;
        }
        playerChoice = evaluatePlayerChoice(playerChoice);
        if (!playerChoice) {
            invalidChoice();
            continue;
        }
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);
        displayResult(result);
        if (askToPlayAgain()) {
            continue;
        } else {
            thanksForPlaying();
            break;
        }
    }
};

const getPlayerChoice = () => {
    return prompt("Please enter rock, paper, or scissors.");
};

const formatPlayerChoice = (playerChoice) => {
    if (playerChoice || playerChoice === "") {
        return playerChoice.trim().toLowerCase();
    } else {
        return false;
    }
};

const decidedNotToPlay = () => {
    alert("I guessed you changed your mind. Maybe next time.");
};

const evaluatePlayerChoice = (playerChoice) => {
    if (
        playerChoice === "rock" || 
        playerChoice === "paper" || 
        playerChoice === "scissors"
    ) {
        return playerChoice;
    } else {
        return false;
    }
}

const invalidChoice = () => {
    alert("You didn't enter rock, paper, or scissors.");
};

const getComputerChoice = () => {
    const computerChoice = Math.floor(Math.random() * 3);
    const rpsArray = ["rock", "paper", "scissors"];
    return rpsArray[computerChoice];
};

const determineWinner = (playerOne, computer) => {
    const winner = 
    playerOne === computer ? "Tie game!"
    : playerOne === "rock" && computer === "paper" ? 
        `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
    : playerOne === "paper" && computer === "scissors" ?
        `playerOne: ${playerOne}\nComputer: ${computer}\nCompuer wins!`
    : playerOne === "scissors" && computer === "rock" ? 
        `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
    : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;

    return winner;
};

const displayResult = (result) => {
    alert(result);
};

const askToPlayAgain = () => {
    return confirm("Play again?");
};

const thanksForPlaying = () => {
    alert("Ok, thanks for playing.");
};

initGame();