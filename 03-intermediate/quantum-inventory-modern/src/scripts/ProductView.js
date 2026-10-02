import Storage from "./Storage.js";

const productNameInput = document.getElementById("product-name");
const productQuantityInput = document.getElementById("product-quantity");
const productCategoryOption = document.getElementById("product-category");
const productPriceInput = document.getElementById("product-price");
const productSKU = document.getElementById("product-sku");
const productAddBtn = document.querySelector(".add-new-product-btn");
const productSearchInput = document.getElementById("search-input");
const productSortSelect = document.getElementById("product-sort");
const productFilterCategorySelect = document.getElementById("product-filter");
const productTotalNumber = document.querySelector(".total-static-items");

class ProductView {
  constructor() {
    productAddBtn.addEventListener("click", (e) => this.addProduct(e));
    productSearchInput.addEventListener("input", (e) => this.searchProducts(e));
    productSortSelect.addEventListener("change", (e) => this.sortProducts(e));
    productFilterCategorySelect.addEventListener("change", (e) =>
      this.filterProduct(e),
    );

    this.products = [];
    this.filters = { search: "", sort: "newest", categoryId: "all" };
    this.searchTimer = null;
    this.editingProductId = null;

    // ✅ listenerهای مودال — یه بار
    document
      .querySelector(".edit-product-save")
      .addEventListener("click", () => this.editProdcutSave());

    document
      .querySelector(".edit-product-cancel")
      .addEventListener("click", () => {
        document.getElementById("edit-product-modal").classList.add("hidden");
      });
  }

  addProduct(e) {
    e.preventDefault();

    const title = productNameInput.value.trim();
    const quantity = productQuantityInput.value.trim();
    const categoryId = productCategoryOption.value;
    const price = productPriceInput.value.trim();
    const sku = productSKU.value.trim();

    if (!title || !quantity || !categoryId || !price || !sku) return;

    Storage.saveProduct({ title, quantity, categoryId, price, sku });

    this.setProducts();
    this.renderProducts();

    productNameInput.value = "";
    productQuantityInput.value = "";
    productCategoryOption.value = "select a category";
    productPriceInput.value = "";
    productSKU.value = "";
    this.setProductsTotalNumber();
  }

  setProducts() {
    this.products = Storage.getAllProducts();
    productTotalNumber.innerText = this.products.length;
  }

  setProductsTotalNumber() {
    productTotalNumber.innerText = this.products.length;
  }

  searchProducts(e) {
    this.filters.search = e.target.value.trim().toLowerCase();

    clearTimeout(this.searchTimer);
    this.searchTimer = setTimeout(() => this.renderProducts(), 300);
  }

  sortProducts(e) {
    this.filters.sort = e.target.value;
    this.renderProducts();
  }

  filterProduct(e) {
    this.filters.categoryId = e.target.value;
    this.renderProducts();
  }

  renderProducts() {
    let visibleProducts = [...this.products];

    if (this.filters.categoryId !== "all") {
      visibleProducts = visibleProducts.filter(
        (p) => p.categoryId == this.filters.categoryId,
      );
    }

    if (this.filters.search) {
      visibleProducts = visibleProducts.filter((p) =>
        p.title.toLowerCase().includes(this.filters.search),
      );
    }

    // سورت
    switch (this.filters.sort) {
      case "newest":
        visibleProducts.sort((a, b) =>
          new Date(a.date) > new Date(b.date) ? -1 : 1,
        );
        break;

      case "oldest":
        visibleProducts.sort((a, b) =>
          new Date(a.date) > new Date(b.date) ? 1 : -1,
        );
        break;

      case "name-a-z":
        visibleProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;

      case "name-z-a":
        visibleProducts.sort((a, b) => b.title.localeCompare(a.title));
        break;

      case "quantity-l-h":
        visibleProducts.sort((a, b) => a.quantity - b.quantity);
        break;

      case "quantity-h-l":
        visibleProducts.sort((a, b) => b.quantity - a.quantity);
        break;

      case "price-l-h":
        visibleProducts.sort((a, b) => a.price - b.price);
        break;

      case "price-h-l":
        visibleProducts.sort((a, b) => b.price - a.price);
        break;
    }

    this.createProductCard(visibleProducts);
  }

  createProductCard(products) {
    let result = "";
    const categories = Storage.getAllCategories();

    products.forEach((product) => {
      const selectedCategory = categories.find(
        (c) => c.id == product.categoryId,
      );
      const categoryName = selectedCategory?.title ?? "Category not set";

      result += `<article class="product-cart panel">
        <div class="product-cart-header">
          <div class="logo logo-card">
            <i class="fas fa-box"></i>
          </div>
          <div class="product-cart-actions">
            <button type="button" data-product-id="${product.id}" class="product-edite-btn product-cart-btn">
              <i class="fas fa-edit"></i>
            </button>
            <button type="button" data-product-id="${product.id}" class="product-delete-btn product-cart-btn">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
        <h3 class="product-card-title">${product.title}</h3>
        <span class="product-card-category category-badge">
          ${categoryName}
        </span>
        <dl class="product-card-stats">
          <div class="product-card-info">
            <dt class="lable">Quantity</dt>
            <dd class="quantity-number number-info">${product.quantity}</dd>
          </div>
          <div class="product-card-info">
            <dt class="lable">Price</dt>
            <dd class="price-number number-info">${product.price}</dd>
          </div>
          <div class="product-card-info">
            <dt class="lable">SKU</dt>
            <dd class="SKU-number number-info">${product.sku}</dd>
          </div>
          <div class="product-card-info">
            <dt class="lable">Date</dt>
            <dd class="date-number number-info">
              ${new Date(product.createdAt).toLocaleDateString("fa-IR")}
            </dd>
          </div>
        </dl>
      </article>`;
    });

    const productsContainer = document.querySelector(
      ".product__inventory-grid",
    );
    productsContainer.innerHTML = result;

    const allDeleteProductsBtn = [
      ...document.querySelectorAll(".product-delete-btn"),
    ];

    allDeleteProductsBtn.forEach((item) => {
      item.addEventListener("click", (e) => this.deleteProduct(e));
    });

    const allEditProdcutsBtn = [
      ...document.querySelectorAll(".product-edite-btn"),
    ];

    allEditProdcutsBtn.forEach((item) =>
      item.addEventListener("click", (e) => this.editProduct(e)),
    );
  }

  deleteProduct(e) {
    const id = e.target.dataset.productId;
    Storage.deleteProduct(id);
    this.products = Storage.getAllProducts();
    this.renderProducts();
  }

  editProduct(e) {
    const id = e.target.dataset.productId;
    const editedProduct = Storage.getAllProducts().find(
      (p) => Number(p.id) === Number(id),
    );

    if (!editedProduct) return;

    document.getElementById("edit-product-name").value = editedProduct.title;
    document.getElementById("edit-product-quantity").value =
      editedProduct.quantity;
    document.getElementById("edit-product-category").value = String(
      editedProduct.categoryId,
    );
    document.getElementById("edit-product-price").value = editedProduct.price;
    document.getElementById("edit-product-sku").value = editedProduct.sku;

    this.editingProductId = editedProduct.id; // ✅ برای دکمه ذخیره

    document.getElementById("edit-product-modal").classList.remove("hidden");
  }

  editProductFormInputs() {
    const title = document.getElementById("edit-product-name").value;
    const quantity = document.getElementById("edit-product-quantity").value;
    const categoryId = document.getElementById("edit-product-category").value;
    const price = document.getElementById("edit-product-price").value;
    const sku = document.getElementById("edit-product-sku").value;

    return { title, quantity, categoryId, price, sku };
  }

  editProdcutSave() {
    if (!this.editingProductId) return;

    const inputs = this.editProductFormInputs();
    const isEmpty = Object.values(inputs).some((v) => !v);
    if (isEmpty) return;

    Storage.editProduct({
      id: this.editingProductId,
      ...inputs,
    });

    this.setProducts();
    this.renderProducts();

    document.getElementById("edit-product-modal").classList.add("hidden");
    this.editingProductId = null;
  }
}

export default new ProductView();
