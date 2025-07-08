//? Product Listing App :
//* Step 1: Fetch products from the API
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
    this.tag = tag
  }
}

class ProductServices {

  static setupApiClient() {
    return axios.create({
      baseURL: 'http://localhost:3000',
    });
  }

  static async fetchProducts() {
    try {
      const { data } = await this.setupApiClient().get("/items");
      return data.map(product => new Product(
        product.id,
        product.title,
        product.image_url,
        product.category,
        product.price,
        product.tag,
      ));
    }
    catch (error) {
      console.log(error);
    }
  }
}

class ProductViewUi {
  static renderProducs(products) {
    const productsGrid = document.querySelector(".products__grid");
    let result = "";
    products.forEach(product => {
      result +=
        `
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

      const filterd = products.filter(product => product.title.toLowerCase().includes(searchText));
      console.log(filterd);

      ProductViewUi.renderProducs(filterd);
    });
  }

  static tagFilter(products) {

    const tagfilterBtn = document.querySelectorAll(".filter_badge");
    tagfilterBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const filter = e.target.dataset.filter.toLowerCase();
        const filterd = filter === "all"
          ? products
          : [...products].filter(product => product.category.toLowerCase() === filter);
        ProductViewUi.renderProducs(filterd);
        tagfilterBtn.forEach(unActive => unActive.classList.remove("active"));
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

