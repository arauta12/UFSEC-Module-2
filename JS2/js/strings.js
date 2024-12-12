// Strings
const myVariable = "Mathematics";

// Length
console.log("Every good boy does fine".length)

// Get char at pos (0-based)
console.log(myVariable.charAt(10));

// Find index of first occurrence
console.log(myVariable.indexOf("ati"));

// Find index of last occurrence
console.log(myVariable.lastIndexOf("ath"));

// Slice: start index, end index (not included) (optional)
console.log(myVariable.slice(5, 6));

// Uppercase
console.log(myVariable.toUpperCase());

// Lowercase
console.log(myVariable.toLowerCase());

// Includes
console.log(myVariable.includes("mat"));

// Split: returns array of segments
console.log(myVariable.split("e"))

console.log("Every good boy does fine.".split(" "));