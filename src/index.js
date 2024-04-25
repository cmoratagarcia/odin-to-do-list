import "./style.css";
import { renderTask, createTaskCard } from "./components/tasks.js";
import {
  retrieveFromStorage,
  deleteTask,
  taskArray,
} from "./components/taskLibrary.js";
import "./components/categories.js";

const form = document.querySelector(".form");
const newTask = document.querySelector(".new-task-btn");
const dialog = document.querySelector("dialog");
const closeDialog = document.querySelector(".close-dialog");
const submitBtn = document.querySelector(".submit");
const taskContainer = document.querySelector(".task-container");

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
  retrieveFromStorage();
  // Render tasks from localStorage
  refreshTaskList(taskArray);
}

function refreshTaskList(array) {
  taskContainer.innerHTML = "";
  array.forEach((task, index) => {
    const taskCard = createTaskCard(task, index);
    taskContainer.appendChild(taskCard);
  });

  const deleteBtns = document.querySelectorAll(".delete-button");
  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      deleteTask(event.target.parentElement.id);
      updateDisplay();
    });
  });
}

// Load tasks from localStorage when the page loads
window.addEventListener("DOMContentLoaded", () => {
  updateDisplay();
});
