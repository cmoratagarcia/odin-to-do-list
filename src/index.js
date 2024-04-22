import "./style.css";
import renderTask from "./components/renderTask.js";

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
  const { taskCard } = renderTask(); //Potentially add newTask here
  taskContainer.appendChild(taskCard);
});
