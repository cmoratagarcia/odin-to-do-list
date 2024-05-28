let taskArray = [];
let catArray = [];

function addToLibrary(array, item) {
  array.push(item);
  saveToStorage(array == taskArray ? "taskList" : "catList", array);
}

function removeFromLibrary(array, index) {
  array.splice(index, 1);
  saveToStorage(array == taskArray ? "taskList" : "catList", array);
}

function saveToStorage(listName, array) {
  localStorage.setItem(listName, JSON.stringify(array));
}

function retrieveFromStorage(listName, array) {
  const itemsJSON = localStorage.getItem(listName);
  if (itemsJSON) {
    array = JSON.parse(itemsJSON);
  }

  return array;
}

export {
  addToLibrary,
  removeFromLibrary,
  retrieveFromStorage,
  taskArray,
  catArray,
};
