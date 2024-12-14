// errors and handling

// ReferenceError: var not defined!
// SyntaxError: wrong grammar (caught prior to execution)
// TypeError

"use strict";
// variable = "Dave";
// console.log(variable);
// Object..create();
// const name = "dave";
// name = "";

const makeError = () => {
    let i = 1;
    while (i <= 5) {
        try {
            // const name = "";
            // name = "Hi";
            // throw new customError("this is a custom error");
            // throw new Error("This is a custom error!");
            if (i % 2 !== 0) {
                throw new Error("Odd Number!");
            }
            console.log("Even number");
        } catch(err) {
            // console.error(err);  // appears like an error
            // console.error(err.name);  // TypeError
            // console.error(err.message);  // what it is
            // console.warn(err);  // appears like a warning
            // console.table(err);  // logs err properties, good for dev
            console.log(err.stack);
        } finally {  // done no matter what
            console.log("...finally");
            i++;
        }
    }
};
makeError();

// function customError(message) {
//     this.message = message;
//     this.name = "customError";
//     this.stack = `${this.name}: ${this.message}`;
// }