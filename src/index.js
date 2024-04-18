import "./style.css";

const dialog = document.querySelector("dialog");

function component() {
  const element = document.createElement("div");
  return element;
}

document.body.appendChild(component());
dialog.showModal();
