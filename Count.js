const count = document.getElementById("count");
const decrementBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const incrementBtn = document.getElementById("increase");
let currentCount = 0;
// Update the count display
function updateCount() {
    count.textContent = currentCount;
}  
// decrement Event Listener
decrementBtn.addEventListener("click",function() {
    currentCount=currentCount-5;
    updateCount();
});
// reset Event Listener
resetBtn.addEventListener("click",function() {
    currentCount = 0;
    updateCount();
});
// increment Event Listener
incrementBtn.addEventListener("click",function() {
    currentCount=currentCount+5;
    updateCount();
});
updateCount();
