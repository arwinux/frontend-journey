export default class Storage {
  static getAllCategories() {
    const savedCategories = JSON.parse(localStorage.getItem("category")) || [];

    savedCategories.sort((a, b) => {
      return new Date(a.date) > new Date(b.date) ? -1 : 1;
    });

    return savedCategories;
  }

  static getAllProducts() {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];

    return savedProducts;
  }

  static saveCategory(categoryToSave) {
    const savedCategories = Storage.getAllCategories();

    const existedItem = savedCategories.find(
      (c) => c.id === savedCategories.id,
    );

    if (existedItem) {
      // Edit
      existedItem.title = categoryToSave.title;
      existedItem.description = categoryToSave.description;
      existedItem.createdAt = new Date().getDate();
    } else {
      // New
      categoryToSave.id = new Date().getDate();
      categoryToSave.createdAt = new Date().toISOString();
      savedCategories.push(categoryToSave);
    }

    localStorage.setItem("category", JSON.stringify(savedCategories));
  }

  static saveProduct(productToSave) {
    const savedProducts = Storage.getAllProducts();

    const existedItem = savedProducts.find((c) => c.id === productToSave.id);

    if (existedItem) {
      existedItem.title = productToSave.title;
      existedItem.categoryId = productToSave.categoryId;
      existedItem.quantity = productToSave.quantity;
      existedItem.price = productToSave.price;
      existedItem.sku = productToSave.sku;
      existedItem.createdAt = productToSave.createdAt;
    } else {
      productToSave.id = new Date().getDate();
      productToSave.createdAt = new Date().toISOString();
      savedProducts.push(productToSave);
    }

    localStorage.setItem("products", JSON.stringify(savedProducts));
  }

  static deleteProduct(id) {
    const savedProducts = Storage.getAllProducts();
    const filteredProducts = savedProducts.filter((p) => p.id !== parseInt(id));
    localStorage.setItem("products", JSON.stringify(filteredProducts));
  }

  static editProduct({ id, title, categoryId, quantity, price, sku }) {
    const savedProducts = Storage.getAllProducts();
    const editedProduct = savedProducts.find(
      (p) => Number(p.id) === Number(id),
    );

    if (!editedProduct) return;

    editedProduct.title = title;
    editedProduct.categoryId = categoryId;
    editedProduct.quantity = quantity;
    editedProduct.price = price;
    editedProduct.sku = sku;
    editedProduct.updatedAt = new Date().toISOString();

    localStorage.setItem("products", JSON.stringify(savedProducts)); // ✅ حیاتی
  }
}
