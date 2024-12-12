// Conditionals

// if (condition) {
//     // run code
// } else {
//     // run this if false
// }

let soup = "chicken noodle soup";
let customerIsBanned = false;
let crackers = true;
let reply;

if (customerIsBanned) {
    reply = "No soup for you!";
} else if (soup && crackers) {
    reply = `Here's your order of ${soup} and crackers.`;
} else if (soup) {
    reply = `Here's your order of ${soup}`;
} else {
    reply = "Sorry, we're out of soup";
}

console.log(reply);


let testscore = 59;
let grade;
let collegeStudent = true;

if (testscore >= 90) {
    grade = "A";
} else if (testscore >= 80) {
    grade = "B";
} else if (testscore >= 70) {
    grade = "C";
} else if (testscore >= 60) {
    grade = "D";
} else {
    grade = "F";
    if (collegeStudent) {
        grade = "U"
    } else {
        grade = "F";
    }
}

console.log(grade);

let playerOne = "Rock", computer = "Rock";
if (playerOne === computer) {
    // tie
} else if (playerOne === "Rock") {
    if (computer === "paper") {
        // computer wins
    } else {
        // player winds
    }
} else if (playerOne === "Paper") {
    if (computer === "scissors") {
        // computer wins
    } else {
        // player winds
    }
} else {
    if (computer === "rock") {
        // computer wins
    } else {
        // player winds
    }
}