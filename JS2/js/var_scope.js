// var, let, const
// DONT use var

// var x = 1;  // var does not throw errors with same variable name
// var x = 2;
// let x = 1; // let with throw errors if defining with same name
// x = 2; // can reassign

// const x = 1;  // cant reassign a value
// // x = 2;


// // Global
// let y = 2;  // seen in all part of code

// // Local (block)
// {
//     let y = 4;
//     // can't see in global scope
// }

// // Local (function)
// function func() {
//     const z = 5;
//     console.log(y);  // global y
//     {
//         let y = 45;
//         console.log(y);  // block y
//     }
// }

// func();
// // console.log(x);
// // console.log(y);
// // console.log(z);

var x = 1;  // global
let y = 2;  // global
const z = 3;  // global

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function func() {
    var x = 10;
    const z = 5;
    {
        var x = 11;  // function scoped!
        const z = 6;  // block scoped
        console.log(`block: ${x}`);
        console.log(`block: ${y}`);
        console.log(`block: ${z}`);
    }
    console.log(`function: ${x}`);
    console.log(`function: ${y}`);
    console.log(`function: ${z}`);
}

func();