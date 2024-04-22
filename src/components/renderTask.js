import { Task, addTask } from "./taskLibrary.js";

function renderTask() {
  const title = document.querySelector("#title").value;
  const description = document.querySelector("#description").value;
  const dueDate = document.querySelector("#due-date").value;
  const category = document.querySelector("#category").value;
  const priority = document.querySelector("#priority").value;

  const newTask = new Task(title, description, dueDate, category, priority);
  addTask(newTask);
  const taskCard = createTaskCard(newTask);
  return taskCard;
}

function createTaskCard(taskData) {
  const taskCard = document.createElement("li");
  taskCard.classList.add("task-card");
  taskCard.classList.add(taskData.priority);

  const taskTitle = document.createElement("h3");
  taskTitle.innerText = taskData.title;

  const taskDescription = document.createElement("p");
  taskDescription.innerText = taskData.description;

  const taskDate = document.createElement("p");
  taskDate.innerText = taskData.due;

  taskCard.appendChild(taskTitle);
  taskCard.appendChild(taskDescription);
  taskCard.appendChild(taskDate);

  return taskCard;
}

export { renderTask, createTaskCard };
