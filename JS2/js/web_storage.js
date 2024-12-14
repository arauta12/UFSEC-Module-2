// Web Storage API

// NOT part of DOM - refer to Window API
// Available to JS via global var: window 
// We don't have to type window (implied)

// window.alert("ok") = alert("Ok")
// window.alert(window.location);  // return url

// storage
const arr = ["eat", "sleep", "code"];
const myObj = {
    name: "Andrei",
    hobbies: ["eat", "sleep", "code"],
    logName: function() {
        console.log(this.name);
    }
};


// // session storage (only on website) - only string data (like JSON)
// sessionStorage.setItem("mySessionStore", JSON.stringify(myObj));

// // Use JSON to get actual object
// const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
// console.log(mySessionData);  // string data

// also works for arr


// session storage (only on website) - only string data (like JSON)
localStorage.setItem("myLocalStore", JSON.stringify(myObj));

// get key
const key = localStorage.key(0);
console.log(localStorage.length);
console.log(key);

//removing
// localStorage.removeItem("myLocalStore");

// removing all
localStorage.clear();

// Use JSON to get actual object
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));

console.log(myLocalData);  // string data


