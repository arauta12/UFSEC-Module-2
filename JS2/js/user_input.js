// User input
// alert("Hello World");

// let myBool = confirm("OK === True\nCancel === False");
// console.log(myBool);

let name = prompt("Please enter your name:");  // if cancelled: null! (false)

// nullish-coalescing operator
// If name is null: do assigned operation.
// console.log(typeof name);
if (name) {  // CAN'T check properties if null! 
    console.log(name.length);
    console.log(name.trim().length);
    console.log(name.trim());
} else {
    console.log("You didn't enter your name.");
}