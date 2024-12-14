// Higher Order functions

// A higher order function does at least one of the following:
// ** takes 1+ functions as an argument
// ** returns a function as the result

import { posts } from "./posts.js"

// forEach
posts.forEach(post => {
    console.log(post);
});
console.clear();

// filter
const filteredPosts = posts.filter(post => {
    return post.userId === 1;
});
console.log(filteredPosts);

// map
const mappedPosts = filteredPosts.map(post => {
    return post.id * 10;
});
console.log(mappedPosts);

// reduce
const reducedPostsValue = mappedPosts.reduce((sum, post) => {
    return sum + post;
});
console.log(reducedPostsValue);


