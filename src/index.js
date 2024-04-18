import "./style.css";

const newTask = document.querySelector(".new-task-btn");
const dialog = document.querySelector("dialog");
const closeDialog = document.querySelector(".close-dialog");

function component() {
  const element = document.createElement("div");
  return element;
}

document.body.appendChild(component());
newTask.addEventListener("click", () => {
  dialog.showModal();
});
closeDialog.addEventListener("click", () => {
  dialog.close();
});
