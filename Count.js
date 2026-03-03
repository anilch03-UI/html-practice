const count = document.getElementById("count");
const decrementBtn = document.getElementById("decrementBtn");
const resetBtn = document.getElementById("resetBtn");
const incrementBtn = document.getElementById("incrementBtn");
let currentCount = 0;
// Update the count display
function updateCount() {
    count.textContent = currentCount;
}  
// decrement Event Listener
decrementBtn.addEventListener("click", function() {
    currentCount--;
    updateCount();
});
// reset Event Listener
resetBtn.addEventListener("click", function() {
    currentCount = 0;
    updateCount();
});
// increment Event Listener
incrementBtn.addEventListener("click", function() {
    currentCount++;
    updateCount();
});
updateCount();
