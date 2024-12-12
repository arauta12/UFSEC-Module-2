// Numbers (int)
const myNumber = 42;
const myFloat = 42.0;  // floating point
const myString = "42";
console.log(myNumber === myFloat);  // true
console.log(myNumber === myString);  // false: not same data type

console.log(myString + 3);  // 423
console.log(Number(myString) + 3);  // 45
console.log(Number(myString) === myNumber);  // true

console.log(Number("Dave"));  // NaN (not a number)
console.log(Number(false));  // 0, true = 1

// Is an integer
console.log(Number.isInteger(myNumber));  // true

// Number.parseFloat(): parses an argument and return float num (else NaN)
// removes non numeric chars
const myStr = "42.152abx"
console.log(Number.parseFloat(myStr));  // 42.152

// .toFixed(): format number on amt of decimal points as parameter
// Rounds up
// RETURNS STRING!
console.log(Number.parseFloat(myStr).toFixed(2));

// Also removes non-numeric data
console.log(Number.parseInt(myStr));

// Converts it to a string
console.log(typeof myFloat.toString());

// Number.isNaN(): is value passed is NaN AND is a number type
console.log(Number.isNaN("Dave"));  // false

// Global isNaN(): whether value is NaN or not
console.log(isNaN("Dave"));  // true