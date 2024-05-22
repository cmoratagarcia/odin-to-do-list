import { addToLibrary, removeFromLibrary, categoryArray } from "./libraries";
import { deleteItem, updateDisplay, filterTask } from "../index.js";

const categoryBox = document.querySelector("#new-category");
const categoriesContainer = document.querySelector(".categories");
const categoryMenu = document.getElementById("category");

function createCategory() {
  const categoryValue = categoryBox.value;
  const newCategory =
    categoryValue.charAt(0).toUpperCase() + categoryValue.slice(1);
  addToLibrary(categoryArray, newCategory);
}

categoryBox.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    createCategory();
    updateDisplay();
    categoryBox.value = "";
  }
});

function createCategoryItem(category, index) {
  const categoryOption = document.createElement("li");
  categoryOption.innerHTML = `${category} <i class="fa-solid fa-trash-can delete-button"></i>`;
  categoryOption.setAttribute("id", index);
  categoryOption.addEventListener("click", (event) => {
    deleteItem(event, categoryArray);
    filterTask(event);
  });

  return categoryOption;
}
function createDropDownOption(category) {
  const dropDownCategory = document.createElement("option");
  dropDownCategory.value = category;
  dropDownCategory.innerHTML = category;

  return dropDownCategory;
}
function refreshCategoryList(array) {
  categoriesContainer.innerHTML = `<li>General</li>`;
  categoryMenu.innerHTML = `<option value="general">General</option>`;
  array.forEach((category, index) => {
    const categoryItem = createCategoryItem(category, index);
    categoriesContainer.appendChild(categoryItem);
    const dropDownCategory = createDropDownOption(category);
    categoryMenu.appendChild(dropDownCategory);
  });
}
export { refreshCategoryList };
