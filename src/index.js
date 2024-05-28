import "./style.css";
import { createTask, refreshTaskList } from "./components/tasks.js";
import {
  retrieveFromStorage,
  removeFromLibrary,
  taskArray,
  catArray,
} from "./components/libraries.js";
import {
  highlightSelectedCat,
  refreshCatList,
} from "./components/categories.js";

const form = document.querySelector(".form");
const newTask = document.querySelector(".new-task-btn");
const dialog = document.querySelector("dialog");
const closeDialog = document.querySelector(".close-dialog");
const submitBtn = document.querySelector(".submit");
const catTitle = document.querySelector(".cat-title");

//Clear filtered categories
function clearCatFilter() {
  catTitle.innerText = "All Tasks";
  updateDisplay();
}

function updateDisplay() {
  // Render tasks from localStorage
  refreshTaskList(retrieveFromStorage("taskList", taskArray));
  refreshCatList(retrieveFromStorage("catList", catArray));
}

function deleteItem(event, array) {
  const itemIndex = parseInt(event.target.parentNode.id);
  removeFromLibrary(array, itemIndex);
  updateDisplay();

  // Reset the task filter if a category is deleted
  if (array === catArray) {
    clearCatFilter();
  }
}

function filterTask(event) {
  const filteredArray = taskArray.filter(
    (item) => item.category == event.target.innerText
  );
  refreshTaskList(filteredArray);
  highlightSelectedCat(event);
  catTitle.innerText = event.target.innerText;
}

newTask.addEventListener("click", () => {
  form.reset();
  dialog.showModal();
});

closeDialog.addEventListener("click", () => {
  dialog.close();
});

submitBtn.addEventListener("click", () => {
  if (form.checkValidity()) {
    createTask();
    updateDisplay();
  }
});

// Load tasks from localStorage when the page loads
window.addEventListener("DOMContentLoaded", () => {
  updateDisplay();
});

export { deleteItem, updateDisplay, filterTask, clearCatFilter };
