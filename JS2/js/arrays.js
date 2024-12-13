// Arrays
const myArray = [];  // define with brackets

// add elements to array (mutable)
// can store different types
myArray[0] = "Dave";
myArray[1] = 1001;
myArray[2] = false;

// add to end (return new length of array)
myArray.push("school");

// remove from end & store
const lastItem = myArray.pop();

// add to start (return new length)
const len = myArray.unshift(42);

// remove from front
const first = myArray.shift();

console.log(len);
console.log(first);
console.log(lastItem);

// length
console.log(myArray.length);

// last element
console.log(myArray[myArray.length - 1]);

console.log(myArray[1]);
console.log(myArray[5]); // undefined

// delete myArray[1]; // removes element but DOES NOT SHIFT

// remove from middle and add
myArray.splice(1, 1, 42);

// refer to array
console.log(myArray);  // shows length and elements

// copy portion of array
const arr = ['A', 'B', 'C', 'D', 'E', 'F'];
const newArr = arr.slice(2, 5);
console.log(newArr);

// reverse order
arr.reverse();
console.log(arr);

// joins into a single string (separated by ',')
const newStr = myArray.join();
console.log(newStr);

// opposite of join (elements are strings)
const strArr = newStr.split(",");
console.log(strArr);

// concat/merge arrays
const A = ["A", "B", "C"];
const B = ["D", "E", "F"];
const joinArr = A.concat(B);
console.log(joinArr);

// spread operator: spread values from each array into the positions
const newArray = [...A, ...B];
console.log(newArray);

// multidimensional arrays
const shelfA = ["A", "B", "C"];
const shelfB = ["D", "E", "F"];

const clothesA = ["1", "2", "3"];
const clothesB = ["4", "5", "6"];

const shelf = [shelfA, shelfB];
const clothes = [clothesA, clothesB];
const store = [shelf, clothes];
console.log(shelf[0][1]);
console.log(clothes[1][0]);
console.log(store[0][0][2]);