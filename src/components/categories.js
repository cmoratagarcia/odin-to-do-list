import { addToLibrary, removeFromLibrary, categoryArray } from "./libraries";
import { updateDisplay } from "../index.js";

const categoryBox = document.querySelector("#new-category");
const categories = document.querySelector(".categories");

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
  categoryOption.innerHTML = `${category} <i class="fa-solid fa-trash-can"></i>`;
  categoryOption.setAttribute("id", index);

  return categoryOption;
}

function refreshCategoryList() {
  categories.innerHTML = `<li>General</li>`;
  categoryArray.forEach((category, index) => {
    const categoryItem = createCategoryItem(category, index);
    categories.appendChild(categoryItem);
  });

  const deleteIcons = document.querySelectorAll(".fa-trash-can");
  deleteIcons.forEach((icon) => {
    icon.addEventListener("click", (event) => {
      removeFromLibrary(categoryArray, event.target.parentElement.id);
      updateDisplay();
    });
  });
}
export { refreshCategoryList };
