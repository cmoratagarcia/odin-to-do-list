let taskArray = [];
let categoryArray = [];

function addToLibrary(array, task) {
  array.push(task);
  saveToStorage(array == taskArray ? "taskList" : "categoryList", array);
}

function removeFromLibrary(array, index) {
  array.splice(index, 1);
  saveToStorage(array == taskArray ? "taskList" : "categoryList", array);
}

function saveToStorage(listname, array) {
  localStorage.setItem(listname, JSON.stringify(array));
}

function retrieveFromStorage(listname, array) {
  const tasksJSON = localStorage.getItem(listname);
  if (tasksJSON) {
    array = JSON.parse(tasksJSON);
  }

  return array;
}

export {
  addToLibrary,
  removeFromLibrary,
  retrieveFromStorage,
  taskArray,
  categoryArray,
};
