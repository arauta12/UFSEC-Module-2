// DOM: Document Object Model

// select id
const view1 = document.getElementById("view1");  // only by id
console.log(view1);  // shows html of that section

const view2 = document.querySelector("#view2");  // can select by many means (more than id)
console.log(view2);

// change property
view1.style.display = "none";
view2.style.display = "flex";

// selecting by class/others
const views = document.getElementsByClassName("view");
console.log(views);  // html collection (2 elements)

const sameViews = document.querySelectorAll('.views');
console.log(sameViews);  // node list: nodes can be anything

const divs = view1.querySelectorAll("div");  // select within view1
console.log(divs);  // node list

const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);  // html collection

// special selecting
const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);  // show even divs in page

// examples
for (let i = 0; i < evenDivs.length; ++i) {
    evenDivs[i].style.backgroundColor = "darkblue";
    evenDivs[i].style.width = "200px";
    evenDivs[i].style.height = "200px";
}

const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent = "Hello World!";  // just the text
const navbar = document.querySelector("nav");
navbar.innerHTML = `<h1>hello!</h1> <p>This should align right</p>` // actual html inserted
console.log(navbar);
navbar.style.justifyContent = "flex-start";


// navigating DOM tree
console.log(evenDivs[0]);  // 1st div in that list
console.log(evenDivs[0].parentElement);  // get parent element
console.log(evenDivs[0].parentElement.children);  // all children of parent (html collection)
console.log(evenDivs[0].parentElement.childNodes);  // child nodes & text nodes
console.log(evenDivs[0].parentElement.hasChildNodes());  // does it have child nodes?
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);  // last element of parent
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling);
console.log(evenDivs[0].previousSibling);
console.log(evenDivs[0].previousElementSibling);

// changing the DOM
view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";

while (view2.lastChild) {
    view2.lastChild.remove();
}

const createDivs = (parent, iter) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = iter;
    newDiv.style.backgroundColor = "#000";
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.margin = "10px";
    newDiv.style.display = "flat";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    parent.append(newDiv);
};
// createDivs(view2, 10);

for (let i = 1; i <= 12; ++i) {
    createDivs(view2, i);
}