const taskInput = document.getElementById("new-task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

const remainingTask = document.getElementById("tasks-remaining");
const completedTask = document.getElementById("tasks-completed");

let remaining = 0;
let completed = 0;

// Add Task
addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

function addTask() {

    const taskValue = taskInput.value.trim();

    if (taskValue === "") return;


    // Create list item
    const li = document.createElement("li");

    li.innerHTML = `

        <label>
            <input type="checkbox" class="task-checkbox">
            <span class="task-text">${taskValue}</span>
        </label>

        <button class="delete-btn">
            <i class="fas fa-trash"></i>
        </button>

    `;


    taskList.appendChild(li);

    remaining++;

    updateCounts();

    taskInput.value = "";



    // Checkbox complete
    const checkbox = li.querySelector(".task-checkbox");

    checkbox.addEventListener("change", function () {

        const text = li.querySelector(".task-text");

        if (checkbox.checked) {

            text.style.textDecoration = "line-through";

            remaining--;
            completed++;

        }

        else {

            text.style.textDecoration = "none";

            remaining++;
            completed--;

        }

        updateCounts();

    });



    // Delete task
    const deleteBtn = li.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", function () {

        if (checkbox.checked) {

            completed--;

        }

        else {

            remaining--;

        }

        li.remove();

        updateCounts();

    });

}

// Update footer counts
function updateCounts() {

    remainingTask.textContent = remaining + " tasks remaining";

    completedTask.textContent = completed + " tasks completed";

}
