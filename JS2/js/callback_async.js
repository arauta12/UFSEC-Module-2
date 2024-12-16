// Callbacks, promises, thenables, async/await

// Callbacks: functions passed as argument to another function
// function first(parameter, callback) {
//     callback();
// }

// // AKA 'callback hell':
// first(para, function() {
//     secondFunction(para, function() {
//         third(para, function() {
//             // stuff
//         });
//     });
// });

// Promises states
// 1) pending
// 2) fullfilled
// 3) rejected

// const myPromise = new Promise((resolve, reject) => {
//     const error = false;
//     if (!error) {
//         resolve("Yes! resolved it!");
//     } else {
//         reject("No! rejected the promise.")
//     }
// });

// // get values from promise
// myPromise
// .then(value => {
//     return value + 1;
// })
// .then(newValue => {
//     console.log(newValue);
// })
// .catch(err => {
//     console.log(err);
// });

// // timeout
// const nextPromise = new Promise((resolve, reject) => {
//     setTimeout(function() {
//         resolve("myNextPromise resolved");
//     }, 3000);
// });

// nextPromise.then(value => {
//     console.log(value);
// });  // finished after myPromise

// myPromise.then(value => {
//     console.log(value);
// });

// -------------------------------------------------------

// Async / wait
// const myUsers = {
//     userList: []
// };

// async function myFunc() {

// }

const getAllUserEmails = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();  // also a promise

    const userEmailArr = jsonUserData.map(user => {
        return user.email;
    });

    // console.log(userEmailArr);
    postToWeb(userEmailArr);
    // return jsonUserData;
}

const postToWeb = (data) => {
    console.log(data);
}

// must use await in async function
// const myFunc = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const jsonUserData = await response.json();  // also a promise
//     return jsonUserData;
// };

// myFunc();

// const anotherFunc = async () => {
//     const data = await myFunc();
//     // console.log(data);
//     myUsers.userList = data;
// };

// anotherFunc();  // still async
// console.log(myUsers.userList);

getAllUserEmails();

// -------------------------------------------------------

// Pending

// const users = fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => {
//     // console.log(response);
//     return response.json();
// })
// .then(data => {
//     // console.log(data);
//     data.forEach(user => {
//         console.log(user);
//     })
// });

// console.log(users);  // does not wait on the code above