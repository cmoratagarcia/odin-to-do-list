import { addToLibrary, removeFromLibrary, categoryArray } from "./libraries";
import { deleteItem, update, updateDisplay } from "../index.js";

const categoryBox = document.querySelector("#new-category");
const categoriesContainer = document.querySelector(".categories");
const categoryMenu = document.getElementById("category");

function createCategory() {
  const newCategory = categoryBox.value;

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
  const categoryText = category.charAt(0).toUpperCase() + category.slice(1);
  categoryOption.innerHTML = `${categoryText} <i class="fa-solid fa-trash-can delete-button"></i>`;
  categoryOption.setAttribute("id", index);
  categoryOption.addEventListener("click", (event) =>
    deleteItem(event, categoryArray)
  );

  return categoryOption;
}
function createDropDownOption(category) {
  const dropDownCategory = document.createElement("option");
  dropDownCategory.value = category.toLowerCase();
  dropDownCategory.innerHTML =
    category.charAt(0).toUpperCase() + category.slice(1);

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
