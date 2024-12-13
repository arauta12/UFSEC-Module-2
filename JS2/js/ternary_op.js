// Conditionals: ternary operator

//syntax
//condition ? ifTrue : ifFalse;

let soup = "chicken noodle soup";
let response = soup ? "Yes, we have soup." : "Sorry, no soup today.";
console.log(response);

let isCustomerBanned = true;
let soupAccess = isCustomerBanned ? "Sorry, no soup for you"
    : soup ? `Yes, we have ${soup} today.`
    : "Sorry, no soup today.";
console.log(soupAccess);

let testScore = 80;
let grade = testScore > 89 ? "A"
    : testScore > 79 ? "B"
    : testScore > 69 ? "C"
    : testScore > 59 ? "D"
    : "F";
console.log(`My grade is ${grade}.`);


let playerOne = "rock", computer = "paper";
let result = playerOne === computer ? "Tie game!"
    : playerOne === "rock" && computer === "paper" ? "Computer wins!"
    : playerOne === "paper" && computer === "scissors" ? "Compuer wins!"
    : playerOne === "scissors" && computer === "rock" ? "Computer wins!"
    : "playerOne wins!";
console.log(result);