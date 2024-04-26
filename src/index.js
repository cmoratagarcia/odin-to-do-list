import "./style.css";
import { createTask, refreshTaskList } from "./components/tasks.js";
import {
  retrieveFromStorage,
  taskArray,
  categoryArray,
} from "./components/libraries.js";
import { refreshCategoryList } from "./components/categories.js";

const form = document.querySelector(".form");
const newTask = document.querySelector(".new-task-btn");
const dialog = document.querySelector("dialog");
const closeDialog = document.querySelector(".close-dialog");
const submitBtn = document.querySelector(".submit");

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
  retrieveFromStorage("taskList", taskArray);
  retrieveFromStorage("categoryList", categoryArray);
  // Render tasks from localStorage
  refreshTaskList();
  refreshCategoryList();
}

// Load tasks from localStorage when the page loads
window.addEventListener("DOMContentLoaded", () => {
  updateDisplay();
});

export { updateDisplay };
