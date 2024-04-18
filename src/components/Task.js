export default function Task() {
  const title = document.querySelector("#title");
  const description = document.querySelector("#description");
  const dueDate = document.querySelector("#due-date");
  const category = document.querySelector("#category");
  const priority = document.querySelector("#priority");

  const taskCard = document.createElement("li");
  taskCard.classList.add("task-card");

  const taskTitle = document.createElement("h3");
  taskTitle.innerText = title.value;

  const taskDescription = document.createElement("p");
  taskDescription.innerText = description.value;

  const taskDate = document.createElement("p");
  taskDate.innerText = dueDate.value;

  const taskCategory = document.createElement("p");
  taskCategory.innerText = category.value;

  taskCard.appendChild(taskTitle);
  taskCard.appendChild(taskDescription);
  taskCard.appendChild(taskDate);
  taskCard.appendChild(taskCategory);

  return taskCard;
}
