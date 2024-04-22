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
  saveToStorage();
}

function deleteTask(index) {
  taskArray.splice(index, 1);
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("taskList", JSON.stringify(taskArray));
}

function retrieveFromStorage() {
  const tasksJSON = localStorage.getItem("taskList");
  if (tasksJSON) {
    taskArray = JSON.parse(tasksJSON);
  }
}

export { Task, addTask, deleteTask, retrieveFromStorage, taskArray };
