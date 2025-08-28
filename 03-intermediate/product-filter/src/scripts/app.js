//? Product Listing App :
//* Step 1: Load products from JSON file
//* Step 2: Render all products on page load
//* Step 3: Add search functionality
//* Step 4: Add tag - based filtering

let allProducts = [];

class Product {
  constructor(id, title, imageUrl, category, price, tag) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.category = category;
    this.price = price;
    this.tag = tag;
  }
}

class ProductServices {
  // Fallback data in case fetch fails
  static getFallbackData() {
    return [
      {
        id: 1,
        title: "Solid Color Long Sleeve Nightgowns",
        image_url: "./src/assets/images/gowns/gowns2.jpg",
        category: "Gowns",
        price: "$287.00",
        tag: "# Gowns",
      },
      {
        id: 2,
        title: "Gold Chain with Angel and Praying Hands Pendants",
        image_url: "./src/assets/images/jewelry/jewelry1.jpg",
        category: "Jewelry",
        price: "$731.00",
        tag: "# Jewelry",
      },
      {
        id: 3,
        title: "Green Leaf Print Shirt",
        image_url: "./src/assets/images/shirts/shirt3.jpg",
        category: "Shirt",
        price: "$159.00",
        tag: "# Shirt",
      },
      {
        id: 4,
        title: "Blue Dial Men's Watch",
        image_url: "./src/assets/images/watch/watch1.jpg",
        category: "Watch",
        price: "$524.00",
        tag: "# Watch",
      },
      {
        id: 5,
        title: "Sunset Palm Tree Shirt",
        image_url: "./src/assets/images/shirts/shirt1.jpg",
        category: "Shirt",
        price: "$210.00",
        tag: "# Shirt",
      },
      {
        id: 6,
        title: "Black Silk Slip Dress",
        image_url: "./src/assets/images/gowns/gowns4.jpg",
        category: "Gowns",
        price: "$399.00",
        tag: "# Gowns",
      },
      {
        id: 7,
        title: "Rose Gold Heart and Rose Pendant Necklace",
        image_url: "./src/assets/images/jewelry/jewelry3.jpg",
        category: "Jewelry",
        price: "$876.00",
        tag: "# Jewelry",
      },
      {
        id: 8,
        title: "Star Print Nightgown Set",
        image_url: "./src/assets/images/gowns/gowns1.jpg",
        category: "Gowns",
        price: "$125.00",
        tag: "# Gowns",
      },
      {
        id: 9,
        title: "Green Dial Diamond Watch",
        image_url: "./src/assets/images/watch/watch3.jpg",
        category: "Watch",
        price: "$680.00",
        tag: "# Watch",
      },
      {
        id: 10,
        title: "Abstract Striped Shirt",
        image_url: "./src/assets/images/shirts/shirt4.jpg",
        category: "Shirt",
        price: "$95.00",
        tag: "# Shirt",
      },
      {
        id: 11,
        title: "Black and Blue Steel Bracelet with Diamonds",
        image_url: "./src/assets/images/jewelry/jewelry2.jpg",
        category: "Jewelry",
        price: "$340.00",
        tag: "# Jewelry",
      },
      {
        id: 12,
        title: "Lace Trim Babydoll Nightgown",
        image_url: "./src/assets/images/gowns/gowns3.jpg",
        category: "Gowns",
        price: "$215.00",
        tag: "# Gowns",
      },
      {
        id: 13,
        title: "Gold Dial Chronograph Watch",
        image_url: "./src/assets/images/watch/watch2.jpg",
        category: "Watch",
        price: "$799.00",
        tag: "# Watch",
      },
      {
        id: 14,
        title: "Grey Linen Casual Shirt",
        image_url: "./src/assets/images/shirts/shirt2.jpg",
        category: "Shirt",
        price: "$185.00",
        tag: "# Shirt",
      },
    ];
  }

  static async fetchProducts() {
    try {
      // Try to load data from JSON file
      const response = await fetch("./src/data/db.json");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();

      return data.items.map(
        (product) =>
          new Product(
            product.id,
            product.title,
            product.image_url,
            product.category,
            product.price,
            product.tag
          )
      );
    } catch (error) {
      console.warn(
        "Could not load data from file, using fallback data:",
        error
      );
      // Use fallback data if fetch fails
      const fallbackData = this.getFallbackData();
      return fallbackData.map(
        (product) =>
          new Product(
            product.id,
            product.title,
            product.image_url,
            product.category,
            product.price,
            product.tag
          )
      );
    }
  }
}

class ProductViewUi {
  static renderProducs(products) {
    const productsGrid = document.querySelector(".products__grid");
    let result = "";
    products.forEach((product) => {
      result += `
      <article class="product">
        <div class="product__image">
          <img src="${product.imageUrl}" alt="${product.title}" />
        </div>
        <div class="product__details">
          <div class="product__title">${product.title}</div>
          <div class="product__pricetag">
            <span class="product__price">${product.price}</span>
            <span class="product__tag tag_badge">${product.tag}</span>
          </div>
        </div>
      </article>
      `;
    });
    productsGrid.innerHTML = result;
  }
}

class ProductFilter {
  static searchFilter(products) {
    const searchInput = document.querySelector(".search__input");
    if (!searchInput) return;

    searchInput.addEventListener("input", () => {
      const searchText = searchInput.value.toLowerCase();

      const filterd = products.filter((product) =>
        product.title.toLowerCase().includes(searchText)
      );
      console.log(filterd);

      ProductViewUi.renderProducs(filterd);
    });
  }

  static tagFilter(products) {
    const tagfilterBtn = document.querySelectorAll(".filter_badge");
    tagfilterBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const filter = e.target.dataset.filter.toLowerCase();
        const filterd =
          filter === "all"
            ? products
            : [...products].filter(
                (product) => product.category.toLowerCase() === filter
              );
        ProductViewUi.renderProducs(filterd);
        tagfilterBtn.forEach((unActive) => unActive.classList.remove("active"));
        btn.classList.add("active");
      });
    });
  }
}

class App {
  async init() {
    allProducts = await ProductServices.fetchProducts();
    ProductViewUi.renderProducs(allProducts);
    ProductFilter.searchFilter(allProducts);
    ProductFilter.tagFilter(allProducts);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("Ready to GO");
  const app = new App();
  app.init();
});
