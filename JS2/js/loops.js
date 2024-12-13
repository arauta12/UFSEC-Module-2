// Loops

let myName = "Dave";
let counter = 0;
let letter;
while (counter <= 3) {
    letter = myName[counter];
    console.log(letter);
    if (counter === 1) {
        counter += 2;
        continue;
    }
    if (letter === "v") break;
    counter++;
}
console.log(counter);

for (let i = 0; i < myName.length; i++) {
    console.log(myName.charAt(i));
}

let number = 0;

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

while (number < 50) {
    // number++;
    number += 2;
    console.log(number);
    // number = number + 1;
}

do {  // occurs at least once
    console.log(number);
    // number = number + 1;
} while (number < 50);