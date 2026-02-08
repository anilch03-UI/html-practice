console.log("Hello World!");
console.log("This is my first JavaScript code.");
console.log("I am learning how to use JavaScript in HTML.");
console.log("JavaScript is a powerful programming language.");
console.log("I can use it to create interactive web pages.");
console.log("I am excited to learn more about JavaScript!");

console.log("Hello World");
console.log("we are arthimetical operators");

let a = 100;
let b = 20;

let c = a + b;
console.log("Addition of two numbers");
console.log(c);

let d = a - b;
console.log("Subtraction of two numbers");
console.log(d);

let e = a * b;
console.log("Multiplication of two numbers");
console.log(e);

let f = a / b;
console.log("Division of two numbers");
console.log(f);

console.log("Hello World");
console.log("we are arthimetical operators");

const btn = document.getElementById("submitBtn");
const inp = document.getElementById("nameInput");

btn.addEventListener("click", () => {
  console.log("clicked");
});
inp.addEventListener("input", (event) => {
    console.log("User is typing:", inp.value);
});
