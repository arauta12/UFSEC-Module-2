//JSON: Javascript Object Notation
/*
JSON used to send/receive data
JSON is a text format that is language independent
JSON used to send/receive data in many languages
*/

const myObj = {
    name: "Dave",
    hobbies: ["eat", "sleep", "code"],
    hello: function() {
        console.log("Hello!");
    }
};

const sendJSON = JSON.stringify(myObj);
console.log(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);  // string w/ no method

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);  // object w/ no method
console.log(typeof receiveJSON);  // object