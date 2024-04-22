import "./style.css";
import { renderTask, createTaskCard } from "./components/renderTask.js";
import { retrieveFromStorage, taskArray } from "./components/taskLibrary.js";

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
  const taskCard = renderTask(); //Potentially add newTask here
  taskContainer.appendChild(taskCard);
});

// Load tasks from localStorage when the page loads
window.addEventListener("DOMContentLoaded", () => {
  retrieveFromStorage();
  // Render tasks from localStorage
  taskContainer.innerHTML = "";
  for (const task of taskArray) {
    const taskCard = createTaskCard(task);
    taskContainer.appendChild(taskCard);
  }
});
