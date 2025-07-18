let productData = [
  {
    title: "iPhone 15 Pro Max",
    category: "Electronics",
    quantity: 12,
    price: 1199.0,
    sku: "IP15PM-001",
    date: 1748390400000,
  },
  {
    title: "Ergonomic Office Chair",
    category: "Furniture",
    quantity: 7,
    price: 350.0,
    sku: "EOC-002",
    date: 1748476800000,
  },
  {
    title: "Men's Classic Denim Jeans",
    category: "Clothing & Apparel",
    quantity: 50,
    price: 59.99,
    sku: "MCDJ-003",
    date: 1748563200000,
  },
  {
    title: "A4 Printer Paper (500 Sheets)",
    category: "Office Supplies",
    quantity: 100,
    price: 8.99,
    sku: "A4PP-004",
    date: 1748649600000,
  },
  {
    title: "Organic Brown Rice (5kg)",
    category: "Groceries & Food Items",
    quantity: 30,
    price: 15.5,
    sku: "OBR-005",
    date: 1748736000000,
  },
  {
    title: "Vitamin C Serum",
    category: "Health & Beauty",
    quantity: 25,
    price: 29.99,
    sku: "VCS-006",
    date: 1748822400000,
  },
  {
    title: "Car Battery (12V)",
    category: "Automotive Parts",
    quantity: 8,
    price: 120.0,
    sku: "CB12V-007",
    date: 1748908800000,
  },
  {
    title: "Cordless Drill Set",
    category: "Tools & Hardware",
    quantity: 15,
    price: 89.95,
    sku: "CDS-008",
    date: 1748995200000,
  },
  {
    title: "The Great Gatsby",
    category: "Books & Media",
    quantity: 40,
    price: 12.5,
    sku: "TGG-009",
    date: 1749081600000,
  },
  {
    title: "Reusable Shopping Bags (Set of 3)",
    category: "Miscellaneous",
    quantity: 60,
    price: 9.99,
    sku: "RSB-010",
    date: 1749168000000,
  },
  {
    title: "Samsung Galaxy S24 Ultra",
    category: "Electronics",
    quantity: 10,
    price: 1099.0,
    sku: "SGS24U-011",
    date: 1749254400000,
  },
  {
    title: "Sony WH-1000XM5 Headphones",
    category: "Electronics",
    quantity: 20,
    price: 349.0,
    sku: "SWHXM5-012",
    date: 1749340800000,
  },
  {
    title: "Gaming Laptop (RTX 4080)",
    category: "Electronics",
    quantity: 5,
    price: 2199.0,
    sku: "GLRTX4080-013",
    date: 1749427200000,
  },
  {
    title: "Queen Size Bed Frame",
    category: "Furniture",
    quantity: 8,
    price: 450.0,
    sku: "QSBF-014",
    date: 1749513600000,
  },
  {
    title: "Modern Coffee Table",
    category: "Furniture",
    quantity: 15,
    price: 180.0,
    sku: "MCT-015",
    date: 1749600000000,
  },
  {
    title: "L-Shaped Sectional Sofa",
    category: "Furniture",
    quantity: 4,
    price: 999.0,
    sku: "LSS-016",
    date: 1749686400000,
  },
  {
    title: "Women's Summer Dress",
    category: "Clothing & Apparel",
    quantity: 60,
    price: 45.0,
    sku: "WSD-017",
    date: 1749772800000,
  },
  {
    title: "Unisex Graphic T-Shirt",
    category: "Clothing & Apparel",
    quantity: 80,
    price: 25.0,
    sku: "UGT-018",
    date: 1749859200000,
  },
  {
    title: "Kids' Winter Jacket",
    category: "Clothing & Apparel",
    quantity: 30,
    price: 75.0,
    sku: "KWJ-019",
    date: 1749945600000,
  },
  {
    title: "Gel Pens (Assorted Colors, 12-pack)",
    category: "Office Supplies",
    quantity: 70,
    price: 12.99,
    sku: "GPAC-020",
    date: 1750032000000,
  },
  {
    title: "Spiral Notebook (College Ruled)",
    category: "Office Supplies",
    quantity: 120,
    price: 4.5,
    sku: "SNC-021",
    date: 1750118400000,
  },
  {
    title: "Adhesive Sticky Notes (Neon Colors)",
    category: "Office Supplies",
    quantity: 90,
    price: 6.75,
    sku: "ASN-022",
    date: 1750204800000,
  },
  {
    title: "Organic Quinoa (1kg)",
    category: "Groceries & Food Items",
    quantity: 40,
    price: 9.99,
    sku: "OQ-023",
    date: 1750291200000,
  },
  {
    title: "Artisan Sourdough Bread",
    category: "Groceries & Food Items",
    quantity: 25,
    price: 5.25,
    sku: "ASB-024",
    date: 1750377600000,
  },
  {
    title: "Fair Trade Coffee Beans (500g)",
    category: "Groceries & Food Items",
    quantity: 35,
    price: 18.0,
    sku: "FTCB-025",
    date: 1750464000000,
  },
  {
    title: "Hyaluronic Acid Moisturizer",
    category: "Health & Beauty",
    quantity: 30,
    price: 35.0,
    sku: "HAM-026",
    date: 1750550400000,
  },
  {
    title: "Natural Deodorant (Aluminum-Free)",
    category: "Health & Beauty",
    quantity: 50,
    price: 9.5,
    sku: "NDAF-027",
    date: 1750636800000,
  },
  {
    title: "SPF 50 Sunscreen",
    category: "Health & Beauty",
    quantity: 45,
    price: 19.99,
    sku: "SPF50S-028",
    date: 1750723200000,
  },
  {
    title: "Brake Pads (Front Set)",
    category: "Automotive Parts",
    quantity: 10,
    price: 70.0,
    sku: "BPFS-029",
    date: 1750809600000,
  },
  {
    title: "Engine Oil (Synthetic Blend, 5L)",
    category: "Automotive Parts",
    quantity: 18,
    price: 45.0,
    sku: "EOSB-030",
    date: 1750896000000,
  },
  {
    title: "Windshield Wiper Blades (Set of 2)",
    category: "Automotive Parts",
    quantity: 25,
    price: 22.0,
    sku: "WWB-031",
    date: 1750982400000,
  },
  {
    title: "Socket Wrench Set",
    category: "Tools & Hardware",
    quantity: 12,
    price: 65.0,
    sku: "SWS-032",
    date: 1751068800000,
  },
  {
    title: "Adjustable Monkey Wrench",
    category: "Tools & Hardware",
    quantity: 30,
    price: 18.5,
    sku: "AMW-033",
    date: 1751155200000,
  },
  {
    title: "Assorted Screwdriver Set",
    category: "Tools & Hardware",
    quantity: 20,
    price: 29.99,
    sku: "ASS-034",
    date: 1751241600000,
  },
  {
    title: "1984 by George Orwell",
    category: "Books & Media",
    quantity: 50,
    price: 10.99,
    sku: "1984GO-035",
    date: 1751328000000,
  },
  {
    title: "To Kill a Mockingbird",
    category: "Books & Media",
    quantity: 45,
    price: 9.5,
    sku: "TKAM-036",
    date: 1751414400000,
  },
  {
    title: "Vinyl Record: Thriller by Michael Jackson",
    category: "Books & Media",
    quantity: 20,
    price: 24.99,
    sku: "VRT-037",
    date: 1751500800000,
  },
  {
    title: "Portable Water Bottle (BPA-Free)",
    category: "Miscellaneous",
    quantity: 100,
    price: 14.0,
    sku: "PWB-038",
    date: 1751587200000,
  },
  {
    title: "Yoga Mat with Carrying Strap",
    category: "Miscellaneous",
    quantity: 30,
    price: 28.0,
    sku: "YMCS-039",
    date: 1751673600000,
  },
  {
    title: "Pet Grooming Kit",
    category: "Miscellaneous",
    quantity: 25,
    price: 39.95,
    sku: "PGK-040",
    date: 1751760000000,
  },
];

let categoriesData = [
  {
    title: "Electronics",
    description:
      "Cutting-edge gadgets and digital devices for modern living, including smartphones, laptops, and home entertainment systems.",
  },
  {
    title: "Furniture",
    description:
      "Stylish and functional pieces to furnish your home or office, from ergonomic chairs to elegant sofa sets and storage solutions.",
  },
  {
    title: "Clothing & Apparel",
    description:
      "Fashionable and comfortable wear for all seasons and occasions, encompassing everything from casual wear to formal attire and accessories.",
  },
  {
    title: "Office Supplies",
    description:
      "Everything you need to keep your workspace organized and efficient, including stationery, paper, and desk accessories.",
  },
  {
    title: "Groceries & Food Items",
    description:
      "Fresh and pantry staples for your daily culinary needs, ranging from organic produce to gourmet ingredients and beverages.",
  },
  {
    title: "Health & Beauty",
    description:
      "Products designed to enhance well-being and personal care, such as skincare, cosmetics, supplements, and wellness essentials.",
  },
  {
    title: "Automotive Parts",
    description:
      "Essential components and accessories for vehicle maintenance and repair, including engine parts, tires, and car care products.",
  },
  {
    title: "Tools & Hardware",
    description:
      "Durable instruments and materials for construction, repair, and DIY projects, from power tools to hand tools and building supplies.",
  },
  {
    title: "Books & Media",
    description:
      "A wide selection of literature, movies, music, and digital content for entertainment and education, including bestsellers and classics.",
  },
  {
    title: "Miscellaneous",
    description:
      "Diverse items that don't fit into other specific categories, from unique gifts and novelty items to general household goods.",
  },
];

class InventoryProduct {
  constructor(title, category, quantity, price, sku, date) {
    this.title = title;
    this.category = category;
    this.quantity = quantity;
    this.price = price;
    this.sku = sku;
    this.date = date;
  }
}

class InventoryCateogy {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
}

class InventoryServices {
  static getProducts(products) {
    return products.map(
      (product) =>
        new InventoryProduct(
          product.title,
          product.category,
          product.quantity,
          product.price,
          product.sku,
          product.date
        )
    );
  }

  static getCategories(categories) {
    return categories.map(
      (category) => new InventoryCateogy(category.title, category.description)
    );
  }

  static setProductsStorage(products) {
    let inventoryProducts = InventoryServices.getProducts(products);
    localStorage.setItem("products", JSON.stringify(inventoryProducts));
  }

  static setCategoriesStorage(categories) {
    let inventoryCategories = InventoryServices.getCategories(categories);
    localStorage.setItem("categories", JSON.stringify(inventoryCategories));
  }

  static getProductsStorage() {
    let localDataProduct = localStorage.getItem("products");
    return localDataProduct ? JSON.parse(localDataProduct) : null;
  }

  static getCategoriesStorage() {
    let localDataCategory = localStorage.getItem("categories");
    return localDataCategory ? JSON.parse(localDataCategory) : null;
  }

  static setLocalStorage(products, categories) {
    InventoryServices.setProductsStorage(products);
    InventoryServices.setCategoriesStorage(categories);
  }

  static getLocalStorage() {
    return {
      products: InventoryServices.getProductsStorage(),
      categories: InventoryServices.getCategoriesStorage(),
    };
  }
}

class InventorySearch {
  static searchProducts() {
    const searchInput = document.querySelector(".search-input");
    searchInput.addEventListener("input", () => {
      const searchText = searchInput.value.toLowerCase();

      const allProducts = InventoryServices.getProductsStorage();
      const filtered = allProducts.filter((product) =>
        product.title.toLowerCase().includes(searchText)
      );

      InventoryUi.renderProducts(filtered);
    });
  }
}

class InventoryFilter {
  static filterCategoryProducts() {
    const filterCategorySelect = document.querySelector(
      ".inventory__filter-product"
    );

    filterCategorySelect.addEventListener("change", () => {
      const selectedValue = filterCategorySelect.value;
      const products = InventoryServices.getProductsStorage();

      if (selectedValue === "All") {
        InventoryUi.updateProducts(products);
        return;
      }

      const filtered = products.filter(
        (product) =>
          product.category.toLowerCase() === selectedValue.toLowerCase()
      );

      InventoryUi.renderProducts(filtered);
    });
  }

  static filterSortProducts() {
    const filterSortSelect = document.querySelector(".inventory__sort-product");
    filterSortSelect.addEventListener("change", () => {
      const selectedValue = filterSortSelect.value;
      const products = InventoryServices.getProductsStorage();

      let sortedProducts = [...products];
      if (selectedValue === "Newest First") {
        sortedProducts.sort((a, b) => b.date - a.date);
      } else if (selectedValue === "Oldest First") {
        sortedProducts.sort((a, b) => a.date - b.date);
      } else if (selectedValue === "Name (A-Z)") {
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
      } else if (selectedValue === "Quantity (Low to High)") {
        sortedProducts.sort((a, b) => a.quantity - b.quantity);
      } else if (selectedValue === "Price (Low to High)") {
        sortedProducts.sort((a, b) => a.price - b.price);
      }
      InventoryUi.renderProducts(sortedProducts);
    });
  }
}

class InventoryUi {
  static renderProducts(products) {
    const inventoryGrid = document.querySelector(".product__inventory-grid");

    let productResult = "";
    products.forEach((product) => {
      productResult += `
      <div class="product-cart glass-card animate-slideInUp">
          <div class="product-cart-header">
            <div class="logo"><i class="fas fa-box"></i></div>
            <div class="product-cart-actions">
              <button class="product-edite-btn product-cart-btn fas fa-edit"></button>
              <button data-sku="${
                product.sku
              }" class="product-delete-btn product-cart-btn fas fa-trash"></button>
            </div>
          </div>
          <p class="product-card-title">${product.title}</p>
          <span class="product-card-category category-badge"># ${
            product.category
          }</span>

          <div class="product-card-info">
            <p class="lable">Quantity</p>
            <p class="quantity-number number-info info-badge">${
              product.quantity
            }</p>
          </div>

          <div class="product-card-info">
            <p class="lable">Price</p>
            <p class="price-number number-info info-badge">$${product.price}</p>
          </div>

          <div class="product-card-info">
            <p class="lable">SKU</p>
            <p class="SKU-number number-info info-badge">${product.sku}</p>
          </div>


          <div class="product-card-info">
            <p class="lable">Date</p>
            <p class="date-number number-info info-badge">${InventoryUi.convertDate(
              product.date
            )}</p>
          </div>

        </div>
      `;
    });
    inventoryGrid.innerHTML = productResult;
    InventoryUi.deleteProducts();
  }

  static renderCategories(categories) {
    const categoriesOptions = document.querySelector(".categories-options");
    const categoriesOptionsSearch = document.querySelector(
      ".categories-options-search"
    );

    let categoriesResult = "";
    const categoriesAll = `<option value="All">All</option>`;
    categories.forEach((category) => {
      categoriesResult += `<option value="${category.title}">${category.title}</option>`;
    });
    categoriesOptions.innerHTML = categoriesAll + categoriesResult;
    categoriesOptionsSearch.innerHTML = categoriesAll + categoriesResult;
  }

  static updateProducts(productsDataUpdated) {
    InventoryServices.setProductsStorage(productsDataUpdated);
    let products = InventoryServices.getLocalStorage().products;
    InventoryUi.renderProducts(products);
  }

  static updateCategories(categoriesDataUpdated) {
    InventoryServices.setCategoriesStorage(categoriesDataUpdated);
    let categories = InventoryServices.getLocalStorage().categories;
    InventoryUi.renderCategories(categories);
  }

  static deleteProducts() {
    const deleteProductBtns = document.querySelectorAll(".product-delete-btn");

    deleteProductBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const skuToDelete = e.target.dataset.sku;
        console.log(skuToDelete);
        let currentProducts = InventoryServices.getProductsStorage() || [];

        const updatedProducts = currentProducts.filter(
          (product) => product.sku !== skuToDelete
        );

        InventoryUi.updateProducts(updatedProducts);
        InventoryUi.updateHeaderStats();
      });
    });
  }

  static convertDate(dateId) {
    const date = new Date(dateId);
    const localDate = date.toLocaleDateString("en-uk").split("/");
    return `${localDate[2]}/${localDate[1]}/${localDate[0]}`;
  }

  static createdAtDate() {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return now.getTime();
  }

  static addCategories() {
    const openNewCategorySectionBtn =
      document.querySelector(".add-new-category");
    const inventoryCategorySection = document.querySelector(
      ".inventory__category"
    );

    openNewCategorySectionBtn.addEventListener("click", () => {
      inventoryCategorySection.classList.toggle("hidden");
    });

    const addNewCategoryBtn = document.querySelector(".add-new-category-btn");
    const cancelNewCategoryBtn = document.querySelector(
      ".cancel-new-category-btn"
    );

    const categoryNameInput = document.getElementById("category-name");
    const categoryDescriptionInput = document.getElementById(
      "category-description"
    );

    addNewCategoryBtn.addEventListener("click", () => {
      const newCategory = {
        title: categoryNameInput.value,
        description: categoryDescriptionInput.value,
      };

      let currentCategories = InventoryServices.getCategoriesStorage() || [];
      currentCategories.push(newCategory);
      InventoryUi.updateCategories(currentCategories);
      InventoryUi.updateHeaderStats();
      inventoryCategorySection.classList.toggle("hidden");
      categoryNameInput.value = "";
      categoryDescriptionInput.value = "";
    });

    cancelNewCategoryBtn.addEventListener("click", () => {
      inventoryCategorySection.classList.add("hidden");
    });
  }

  static addProducts() {
    const addNewProduct = document.querySelector(".add-new-product-btn");
    const cancelNewProduct = document.querySelector(".cancel-new-product-btn");

    const productName = document.getElementById("product-name");
    const productCategory = document.getElementById("product-category");
    const productQuantity = document.getElementById("product-quantity");
    const productPrice = document.getElementById("product-price");
    const productSku = document.getElementById("product-sku");

    addNewProduct.addEventListener("click", () => {
      const newProduct = {
        title: productName.value,
        category: productCategory.value,
        quantity: Number(productQuantity.value),
        price: Number(productPrice.value),
        sku: productSku.value,
        date: InventoryUi.createdAtDate(),
      };

      let currentProducts = InventoryServices.getProductsStorage() || [];
      currentProducts.push(newProduct);
      InventoryUi.updateProducts(currentProducts);
      InventoryUi.updateHeaderStats();
    });

    cancelNewProduct.addEventListener("click", () => {
      productName.value = "";
      productCategory.value = "All";
      productQuantity.value = "";
      productPrice.value = "";
      productSku.value = "";
    });
  }

  static updateHeaderStats() {
    const totalItemsSpan = document.querySelector(".total-static-items");
    const totalCategoriesSpan = document.querySelector(
      ".total-categories-items"
    );

    const products = InventoryServices.getProductsStorage() || [];
    const categories = InventoryServices.getCategoriesStorage() || [];

    totalItemsSpan.textContent = products.length;
    totalCategoriesSpan.textContent = categories.length;
  }
}

class InventoryApp {
  static init() {
    const storageData = InventoryServices.getLocalStorage();

    if (!storageData.products || storageData.products.length === 0) {
      InventoryServices.setProductsStorage(productData);
    }

    if (!storageData.categories || storageData.categories.length === 0) {
      InventoryServices.setCategoriesStorage(categoriesData);
    }

    let products = InventoryServices.getLocalStorage().products;
    let categories = InventoryServices.getLocalStorage().categories;

    InventoryUi.renderProducts(products);
    InventoryUi.renderCategories(categories);
    InventoryUi.addCategories();
    InventoryUi.addProducts();
    InventoryUi.updateHeaderStats();
    InventorySearch.searchProducts();
    InventoryFilter.filterCategoryProducts(products);
    InventoryFilter.filterSortProducts(products);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  InventoryApp.init();
});
