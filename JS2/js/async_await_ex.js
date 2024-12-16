// Async, fetch, await example

// 2nd parameter of fetch is an object

// const getDadJoke = async () => {
//     const response = await fetch("https://icanhazdadjoke.com/", {
//         method: "GET",
//         headers: {
//             Accept: "application/json"
//             // Accept: "text/plain"
//         }
//     });
//     const jsonJokeData = await response.json();  // also a promise
//     // const txtJokeData = await response.text();

//     console.log(jsonJokeData);
//     // console.log(txtJokeData);

// };

// getDadJoke();


// 2nd example (post)
// const jokeObj = {
//     id: 'QfiyAAlbpzd', 
//     joke: 'What do you call a criminal going down the stairs? Condescending'
// }

// const postData = async (jokeObj) => {
//     const response = await fetch("https://httpbin.org/post", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json" 
//         },
//         body: JSON.stringify(jokeObj)
//     });
//     const jsonResponse = await response.json();

//     console.log(jsonResponse);
// }

// postData(jokeObj);


// 3rd example request
// const requestJoke = async (firstName, lastName) => {
//     const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&
//     lastName=${lastName}&limitTo=[nerdy]`);
//     const jsonResponse = await response.json();

//     console.log(jsonResponse.value.joke);
// }

// requestJoke("Clint", "Eastwood");


// 4th abstracted example
const getDataFromForm = () => {
    const requestObject = {
        firstName: "Bruce",
        lastName: "Lee",
        categories: ["nerdy"]
    };
    return requestObject;
};

const buildRequestUrl = (requestData) => {
    return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&
//     lastName=${requestData.lastName}&limitTo=[${requestData.categories}]`;
};

const requestJoke = async (url) => {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const joke = jsonResponse.value.joke;
    // console.log(joke);
    postJokeToPage(joke);
};

const postJokeToPage = (joke) => {
    console.log(joke);
};

const processJokeRequest = async () => {
    const reqData = getDataFromForm();
    const reqUrl = buildRequestUrl(reqData);
    await requestJoke(reqUrl);
    console.log("finished!");
};

processJokeRequest();
