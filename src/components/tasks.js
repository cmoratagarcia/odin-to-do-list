import { addToLibrary, taskArray } from "./libraries.js";
import { deleteItem } from "../index.js";
import { format, parseISO } from "date-fns";

function Task(title, description, due, category, priority) {
  this.title = title;
  this.description = description;
  this.due = due;
  this.category = category;
  this.priority = priority;
}

function createTask() {
  const title = document.querySelector("#title").value;
  const description = document.querySelector("#description").value;
  const dueDate = document.querySelector("#due-date").value;
  const category = document.querySelector("#category").value;
  const priority = document.querySelector("#priority").value;

  const newTask = new Task(title, description, dueDate, category, priority);
  addToLibrary(taskArray, newTask);
}

function createTaskCard(taskData, index) {
  const taskCard = document.createElement("li");
  taskCard.classList.add("task-card");
  taskCard.classList.add(taskData.priority);

  const taskTitle = document.createElement("h3");
  taskTitle.innerText = taskData.title;

  const deleteIcon = document.createElement("div");
  deleteIcon.innerHTML = `<i class="fa-solid fa-trash-can delete-button"></i>`;
  deleteIcon.setAttribute("id", index);
  deleteIcon.classList.add("delete-container");
  deleteIcon.addEventListener("click", (event) => deleteItem(event, taskArray));

  const taskDescription = document.createElement("p");
  taskDescription.innerText = taskData.description;

  const taskDate = document.createElement("p");
  taskDate.classList.add("task-date");
  let formattedDate = "";
  if (taskData.due != "") {
    formattedDate = format(parseISO(taskData.due), "MMM-dd-yyyy");
  }
  taskDate.innerText = `Due: ${formattedDate}`;
  taskDate.setAttribute("style", "color: gray; font-style:italic;");

  taskCard.appendChild(taskTitle);
  taskCard.appendChild(deleteIcon);
  taskCard.appendChild(taskDescription);
  taskCard.appendChild(taskDate);

  return taskCard;
}
function refreshTaskList(array) {
  const taskContainer = document.querySelector(".task-container");
  taskContainer.innerHTML = "";
  array.forEach((task, index) => {
    const taskCard = createTaskCard(task, index);
    taskContainer.appendChild(taskCard);
  });
  if (array.length === 0) {
    const noTasksPara = document.createElement("p");
    noTasksPara.innerText = "No tasks in this category";
    taskContainer.appendChild(noTasksPara);
  }
}

export { createTask, createTaskCard, refreshTaskList };
