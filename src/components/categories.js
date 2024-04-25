const categoryBox = document.querySelector("#new-category");
const categories = document.querySelector(".categories");

function addCategory() {
  const newCategory = categoryBox.value;

  const categoryOption = document.createElement("li");
  categoryOption.innerText = newCategory;
  categories.appendChild(categoryOption);
}

categoryBox.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addCategory();
  }
});
