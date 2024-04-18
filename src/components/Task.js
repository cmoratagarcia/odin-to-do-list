export default function Task() {
  const title = document.querySelector("#title");
  const description = document.querySelector("#description");
  const dueDate = document.querySelector("#due-date");
  const category = document.querySelector("#category");
  const priority = document.querySelector("#priority");

  const taskCard = document.createElement("li");
  taskCard.classList.add("task-card");
  taskCard.classList.add(priority.value);

  const taskTitle = document.createElement("h3");
  taskTitle.innerText = title.value;

  const taskDescription = document.createElement("p");
  taskDescription.innerText = description.value;

  const taskDate = document.createElement("p");
  taskDate.innerText = dueDate.value;

  taskCard.appendChild(taskTitle);
  taskCard.appendChild(taskDescription);
  taskCard.appendChild(taskDate);

  return taskCard;
}
