let taskArray = [];

function Task(title, description, due, category, priority) {
  this.title = title;
  this.description = description;
  this.due = due;
  this.category = category;
  this.priority = priority;
}

function addTask(task) {
  taskArray.push(task);
  saveToLocalStorage();
}

function deleteTask(index) {
  taskArray.splice(index, 1);
  saveToLocalStorage();
}

function saveToLocalStorage() {
  localStorage.setItem("taskList", JSON.stringify(taskArray));
}

function retrieveFromLocalStorage() {
  JSON.parse(localStorage.getItem("taskList"));
}

export { Task, addTask, deleteTask, retrieveFromLocalStorage, taskArray };
