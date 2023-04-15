const newItem = document.getElementById("new-item");
const pendingTasksList = document.getElementById("pending-tasks");
const completedTasksList = document.getElementById("completed-tasks");

// Function to add new task
function addItem() {
  // Get value of new item input field
const newItemValue = newItem.value;

// Create new list item element
const li = document.createElement("li");

// Create text node with new item value and append to list item
const itemText = document.createTextNode(newItemValue);
li.appendChild(itemText);

// Create complete button and append to list item
const completeButton = document.createElement("button");
completeButton.innerHTML = "Complete";
li.appendChild(completeButton);

// Add event listener to complete button
completeButton.addEventListener("click", completeItem);

// Create delete button and append to list item
const deleteButton = document.createElement("button");
deleteButton.innerHTML = "Delete";
li.appendChild(deleteButton);

// Add event listener to delete button
deleteButton.addEventListener("click", deleteItem);

// Add new list item to pending tasks list
pendingTasksList.appendChild(li);

// Clear input field
newItem.value = "";
}

// Function to mark task as complete
function completeItem() {
// Get parent element of button (i.e., list item)
const li = this.parentNode;

// Add "complete" class to list item
li.classList.add("complete");

// Remove event listener from complete button
li.childNodes[1].removeEventListener("click", completeItem);

// Change text of complete button to "Completed"
li.childNodes[1].innerHTML = "Completed";

// Remove delete button from list item
li.removeChild(li.childNodes[2]);

// Move list item to completed tasks list
completedTasksList.appendChild(li);
}

// Function to delete task
function deleteItem() {
// Get parent element of button (i.e., list item)
const li = this.parentNode;

// Remove list item from either pending or completed tasks list
if (li.parentNode === pendingTasksList) {
pendingTasksList.removeChild(li);
} else {
completedTasksList.removeChild(li);
}
}

// Add event listener to new item input field
newItem.addEventListener("keypress", function (e) {
if (e.key === "Enter") {
addItem();
}
});

// Add event listener to "Add" button
const addButton = document.getElementById("add-button");
addButton.addEventListener("click", addItem);