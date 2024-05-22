import "./style.css";
import { createTask, refreshTaskList } from "./components/tasks.js";
import {
  retrieveFromStorage,
  removeFromLibrary,
  taskArray,
  categoryArray,
} from "./components/libraries.js";
import { refreshCategoryList } from "./components/categories.js";

const form = document.querySelector(".form");
const newTask = document.querySelector(".new-task-btn");
const dialog = document.querySelector("dialog");
const closeDialog = document.querySelector(".close-dialog");
const submitBtn = document.querySelector(".submit");
const catTitle = document.querySelector(".category-title");

newTask.addEventListener("click", () => {
  form.reset();
  dialog.showModal();
});

closeDialog.addEventListener("click", () => {
  dialog.close();
});

submitBtn.addEventListener("click", () => {
  createTask();
  updateDisplay();
});

function updateDisplay() {
  // Render tasks from localStorage
  refreshTaskList(retrieveFromStorage("taskList", taskArray));
  refreshCategoryList(retrieveFromStorage("categoryList", categoryArray));
}

function deleteItem(event, array) {
  const itemIndex = parseInt(event.target.parentNode.id);
  removeFromLibrary(array, itemIndex);
  updateDisplay();
}

function filterTask(event) {
  const filteredArray = taskArray.filter(
    (item) => item.category == event.target.innerText
  );
  refreshTaskList(filteredArray);
  catTitle.innerText = event.target.innerText;
}

// Load tasks from localStorage when the page loads
window.addEventListener("DOMContentLoaded", () => {
  updateDisplay();
});

export { deleteItem, updateDisplay, filterTask };
