import "./style.css";
import Task from "./components/Task.js";

const newTask = document.querySelector(".new-task-btn");
const dialog = document.querySelector("dialog");
const closeDialog = document.querySelector(".close-dialog");
const submitBtn = document.querySelector(".submit");
const taskContainer = document.querySelector(".task-container");

newTask.addEventListener("click", () => {
  dialog.showModal();
});
closeDialog.addEventListener("click", () => {
  dialog.close();
});
submitBtn.addEventListener("click", () => {
  taskContainer.appendChild(Task());
});
