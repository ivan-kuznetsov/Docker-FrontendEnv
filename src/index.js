import "./assets/styles/app.scss";

let options = {
    something: true,
    anotherThing: false
};

options = {
    ...options,
    oneMoreThing: true
};

console.log("Hi there!");
