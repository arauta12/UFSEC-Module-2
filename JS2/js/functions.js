// Functions

// Methods: Built in function
"Dave".toLowerCase();
Math.random();

// Declaration
// if not provided: undefined
function sum(num1, num2) {
    if (num2 === undefined) {
        return num1 + num1;
    }
    return num1 + num2;
}


// function getUserNameFromEmail(email) {
//     return email.slice(0, email.indexOf("@"));
// }

// // Anonymous function
// const getUserNameFromEmail = function (email) {
//     return email.slice(0, email.indexOf("@"));
// }

// Arrow functions
const getUserNameFromEmail = (email) => {
    return email.slice(0, email.indexOf("@"));
}

// console.log(sum(2));
console.log(getUserNameFromEmail("user@GitHub.com"));

const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

console.log(toProperCase("dAvE"));