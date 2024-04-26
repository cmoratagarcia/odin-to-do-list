import { addToLibrary, removeFromLibrary, categoryArray } from "./libraries";
import { deleteItem } from "../index.js";

const categoryBox = document.querySelector("#new-category");
const categoriesContainer = document.querySelector(".categories");

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

function refreshCategoryList() {
  categoriesContainer.innerHTML = `<li>General</li>`;
  categoryArray.forEach((category, index) => {
    const categoryItem = createCategoryItem(category, index);
    categoriesContainer.appendChild(categoryItem);
  });

  categoriesContainer.addEventListener("click", (event) =>
    deleteItem(event, categoryArray)
  );
}
export { refreshCategoryList };
