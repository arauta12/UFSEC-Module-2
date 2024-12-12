// Switch conditionals

//syntax
// switch (expression OR value) {

//     case choice1:
//         // run
//         break;
    
//     case choice2:
//         // run
//         break;

//     default:
//         // run this if no matches & no breaks here
// }

switch (Math.floor(Math.random() * 5 + 1)) {

    case 1:
        console.log("1");
        break;
    
    case 2:
        console.log("2");
        break;
    
    case 3:
        console.log("3");
        break;

    default:
        // run this if no matches & no breaks here
        console.log("No match");
}

let playerOne = "scissors";
let computer = "paper";

switch (playerOne) {
    case computer:
        console.log("Tie game!");
        break;
    case "rock":
        if (computer === "paper") {
            console.log("Computer wins!");
        } else {
            console.log("Player wins!");
        }
        break;
    case "paper":
        if (computer === "scissors") {
            console.log("Computer wins!");
        } else {
            console.log("Player wins!");
        }
        break;
    default:
        if (computer === "rock") {
            console.log("Computer wins!");
        } else {
            console.log("Player wins!");
        }
}