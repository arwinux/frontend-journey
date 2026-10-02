import Storage from "./Storage.js";

const categoryNameInput = document.getElementById("category-name");
const categoryDescInput = document.getElementById("category-description");
const categoryAddBtn = document.querySelector(".add-new-category-btn");
const categoryAddFormBtn = document.querySelector(".add-new-category");
const categoryAddForm = document.querySelector(".inventory__category");
const categoryTotalNumber = document.querySelector(".total-categories-items");

class CategoryView {
  constructor() {
    categoryAddBtn.addEventListener("click", (e) => this.addCategory(e));
    categoryAddFormBtn.addEventListener("click", this.categoryShowAddForm);

    this.categories = [];
  }

  categoryShowAddForm() {
    categoryAddForm.classList.toggle("hidden");
  }

  addCategory(e) {
    e.preventDefault();
    const title = categoryNameInput.value;
    const description = categoryDescInput.value;

    if (!title || !description) return;
    Storage.saveCategory({ title, description });
    this.categories = Storage.getAllCategories();
    this.createCategoryList();
    categoryNameInput.value = "";
    categoryDescInput.value = "";
    this.setCategoryTotalNumber();
  }

  setCategory() {
    this.categories = Storage.getAllCategories();
    this.setCategoryTotalNumber();
  }

  setCategoryTotalNumber() {
    categoryTotalNumber.innerText = this.categories.length;
  }

  createCategoryList() {
    let resultCategoryForm = `<option value="category">select a category</option>`;
    let resultCategoryFilter = `<option value="all">All</option>`;
    let resultCategoryEdit = "";

    this.categories.forEach((item) => {
      resultCategoryForm += `<option value=${item.id}>${item.title}</option>`;
      resultCategoryFilter += `<option value=${item.id}>${item.title}</option>`;
      resultCategoryEdit += `<option value=${item.id}>${item.title}</option>`;
    });

    const categoryDom = document.getElementById("product-category");
    const categoryDomFilter = document.getElementById("product-filter");
    const cateogryDomEdit = document.getElementById("edit-product-category");

    categoryDom.innerHTML = resultCategoryForm;
    categoryDomFilter.innerHTML = resultCategoryFilter;
    cateogryDomEdit.innerHTML = resultCategoryEdit;
  }
}

export default new CategoryView();
