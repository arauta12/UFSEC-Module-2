// Event listeners

// Syntax: addEventListener(event, function, useCapture (default = false))

const doSomething = () => {
    alert("Do something");
};

// adding event listener
h2.addEventListener("click", doSomething, false);

// removing it
h2.removeEventListener("click", doSomething, false);

h2.addEventListener("click", (event) => {
    console.log(event.target);
    event.target.textContent = "Clicked";
});

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState: complete");
        initApp();
    }
});

const initApp = () => {
    const view = document.querySelector("#view2");
    console.log(view);  // null if script link is before it (or use: defer)
    
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event) => {
        // event.stopPropagation();  // stop others from changing
        // view.style.backgroundColor = "purple";
        // view.classList.add("purple");  // will not override existing
        // view.classList.remove("darkblue");
        // event.target.style.backgroundColor = "purple"; // not same result!
        view.classList.toggle("purple");
        view.classList.toggle("darkblue");  // add & remove
    }, true);

    div.addEventListener("click", (event) => {
        // div.style.backgroundColor = "blue";
        // event.target.style.backgroundColor = "blue";
        div.classList.toggle("blue");
        div.classList.toggle("black");  // add & remove
    }, true);

    h2.addEventListener("click", (event) => {
        const myText = event.target.textContent;
        myText === "My 2nd View"
            ? event.target.textContent = "Clicked"
            : event.target.textContent = "My 2nd View";
        // event.target.textContent = "Clicked";
    }, true);  // use capture: start out and work in

    const nav = document.querySelector("nav");
    nav.addEventListener("mouseover", (event) => {
        event.target.classList.add("height100");
    });
    nav.addEventListener("mouseout", (event) => {
        event.target.classList.remove("height100");
    });


    const view3 = document.querySelector("#view3");
    const myForm = view3.querySelector("#myForm");
    myForm.addEventListener("submit", (event) => {
        event.preventDefault();  // page default behavior is stopped (no refresh)
        console.log("submit event");
    });
};
