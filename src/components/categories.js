import { addToLibrary, catArray } from "./libraries";
import { deleteItem, updateDisplay, filterTask } from "../index.js";

const catBox = document.querySelector("#new-cat");
const catSidebar = document.querySelector(".cat-sidebar");
const catDropdown = document.getElementById("category");

function createCategory() {
  const catValue = catBox.value;
  const newCategory = catValue.charAt(0).toUpperCase() + catValue.slice(1);
  addToLibrary(catArray, newCategory);
}

catBox.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    createCategory();
    updateDisplay();
    catBox.value = "";
  }
});

function createCatItem(category, index) {
  const catListItem = document.createElement("li");

  const catOption = document.createElement("div");
  catOption.classList.add("custom-cat");
  catOption.innerText = category;
  catOption.addEventListener("click", (event) => {
    filterTask(event);
  });

  const deleteIcon = document.createElement("div");
  deleteIcon.innerHTML = `<i class="fa-solid fa-trash-can delete-button"></i>`;
  deleteIcon.setAttribute("id", index);
  deleteIcon.addEventListener("click", (event) => deleteItem(event, catArray));

  catListItem.appendChild(catOption);
  catListItem.appendChild(deleteIcon);

  return catListItem;
}
function createDropDownOption(category) {
  const dropDownCat = document.createElement("option");
  dropDownCat.value = category;
  dropDownCat.innerHTML = category;

  return dropDownCat;
}
function refreshCatList(array) {
  catSidebar.innerHTML = `<li class="general-cat">General</li>`;
  catDropdown.innerHTML = `<option value="general">General</option>`;
  array.forEach((category, index) => {
    const catItem = createCatItem(category, index);
    catSidebar.appendChild(catItem);
    const dropDownCat = createDropDownOption(category);
    catDropdown.appendChild(dropDownCat);
  });
}
export { refreshCatList };
