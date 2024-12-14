// Array version of game
let playGame = confirm("Shall we play rock, paper, or scissors?");
if (playGame) {
    // play
    while (playGame) {
        const playerChoice = prompt("Please enter rock, paper, or scissors.");
        if (playerChoice || playerChoice === "") {
            let playerOne = playerChoice.trim().toLowerCase();
            if (
                playerOne === "rock" || 
                playerOne === "paper" || 
                playerOne === "scissors"
            ) {
                const computerChoice = Math.floor(Math.random() * 3);
                const rpsArray = ["rock", "paper", "scissors"];
                const computer = rpsArray[computerChoice];

                let result = playerOne === computer ? "Tie game!"
                : playerOne === "rock" && computer === "paper" ? 
                    `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                : playerOne === "paper" && computer === "scissors" ?
                    `playerOne: ${playerOne}\nComputer: ${computer}\nCompuer wins!`
                : playerOne === "scissors" && computer === "rock" ? 
                    `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;
                alert(result);
                
                playGame = confirm("Play again?");
                if (!playGame) alert("Ok, thanks for playing.");
                continue;
            } else {
                alert("You didn't enter rock, paper or scissors.");
                continue;
            }
        } else {
            alert("You changed your mind. Maybe next time.");
            break;
        }
    }
} else {  // Not play
    alert("Okay, maybe next time.");
}