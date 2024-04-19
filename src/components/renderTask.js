export default function renderTask() {
  const title = document.querySelector("#title").value;
  const description = document.querySelector("#description").value;
  const dueDate = document.querySelector("#due-date").value;
  const category = document.querySelector("#category").value;
  const priority = document.querySelector("#priority").value;

  const taskCard = document.createElement("li");
  taskCard.classList.add("task-card");
  taskCard.classList.add(priority);

  const taskTitle = document.createElement("h3");
  taskTitle.innerText = title;

  const taskDescription = document.createElement("p");
  taskDescription.innerText = description;

  const taskDate = document.createElement("p");
  taskDate.innerText = dueDate;

  taskCard.appendChild(taskTitle);
  taskCard.appendChild(taskDescription);
  taskCard.appendChild(taskDate);

  return { taskCard };
}
