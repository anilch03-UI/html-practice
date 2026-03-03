const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const addBtn = document.getElementById("addBtn");
const subBtn = document.getElementById("subBtn");
const result = document.getElementById("result");

//Add Event Listeners
addBtn.addEventListener("click", function() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const sum = num1 + num2;
    result.textContent = `Result: ${sum}`;
});
// Subtract Event Listener
subBtn.addEventListener("click", function() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const diff = num1 - num2;
    result.textContent = `Result: ${diff}`;
});
