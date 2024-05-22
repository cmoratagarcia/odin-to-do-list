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
  const categoryListItem = document.createElement("li");
  categoryListItem.setAttribute("id", index);

  const categoryOption = document.createElement("div");
  categoryOption.innerText = category;
  const deleteIcon = document.createElement("div");
  deleteIcon.innerHTML = `<i class="fa-solid fa-trash-can delete-button"></i>`;
  categoryListItem.appendChild(categoryOption);
  categoryListItem.appendChild(deleteIcon);

  categoryListItem.addEventListener("click", (event) => {
    //Might need to be option to avoid filtering when deleting
    filterTask(event);
  });
  
  deleteIcon.addEventListener("click", (event) => {
    deleteItem(event, categoryArray);
  });

  return categoryListItem;
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
