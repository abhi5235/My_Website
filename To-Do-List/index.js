const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");


// Add task
addButton.addEventListener("click", function () {

    const taskText = taskInput.value.trim();

    // Don't add empty task
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create li
    const listItem = document.createElement("li");
    listItem.classList.add("task-item");

    // Create task text
    const taskSpan = document.createElement("span");
    taskSpan.classList.add("task-text");
    taskSpan.textContent = taskText;

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Delete";


    // Mark task as completed
    taskSpan.addEventListener("click", function () {
        listItem.classList.toggle("completed");
    });


    // Delete task
    deleteButton.addEventListener("click", function () {
        listItem.remove();
    });


    // Add elements to li
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);

    // Add li to ul
    taskList.appendChild(listItem);

    // Clear input
    taskInput.value = "";

    // Put cursor back in input
    taskInput.focus();
});
