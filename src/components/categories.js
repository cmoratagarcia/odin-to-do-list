import { addToLibrary, removeFromLibrary, categoryArray } from "./libraries";
import { deleteItem } from "../index.js";

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
    refreshCategoryList();
    categoryBox.value = "";
  }
});

function createCategoryItem(category, index) {
  const categoryOption = document.createElement("li");
  categoryOption.classList.add("delete-button");
  categoryOption.innerHTML = `${category} <i class="fa-solid fa-trash-can"></i>`;
  categoryOption.setAttribute("id", index);

  return categoryOption;
}
function createDropDownOption(category) {
  const dropDownCategory = document.createElement("option");
  dropDownCategory.value = category.toLowerCase();
  dropDownCategory.innerHTML = category;

  return dropDownCategory;
}
function refreshCategoryList(array) {
  categoriesContainer.innerHTML = `<li>General</li>`;
  array.forEach((category, index) => {
    const categoryItem = createCategoryItem(category, index);
    categoriesContainer.appendChild(categoryItem);
    const dropDownCategory = createDropDownOption(category);
    categoryMenu.appendChild(dropDownCategory);
  });

  categoriesContainer.addEventListener("click", (event) =>
    deleteItem(event, categoryArray)
  );
}
export { refreshCategoryList };
