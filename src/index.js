import "./style.css";
import { renderTask, refreshTaskList } from "./components/tasks.js";
import { retrieveFromStorage, taskArray } from "./components/libraries.js";
import "./components/categories.js";

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
  renderTask();
  updateDisplay();
});

function updateDisplay() {
  retrieveFromStorage("taskList", taskArray);
  // Render tasks from localStorage
  refreshTaskList(taskArray);
}

// Load tasks from localStorage when the page loads
window.addEventListener("DOMContentLoaded", () => {
  updateDisplay();
});

export { updateDisplay };
