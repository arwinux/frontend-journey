// import static product data
import { productsData } from "./products.js";

// ========================
// DOM Elements
// ========================

// modal & cart display buttons
const closeModalBtn = document.querySelector(".cart-modal__closebtn");
const modalForm = document.querySelector(".cart-modal");
const showModalBtn = document.querySelector(".nav-header__addcart-btn");

// product and cart containers
const productsDOM = document.querySelector(".product-grid");
const cartContent = document.querySelector(".cart-modal__content");

// cart info display
const cartTotal = document.querySelector(".cart-modal__totalprice-value");
const cartCounts = document.querySelector(".header__cart-count");

// clear cart button
const clearCart = document.querySelector(".cart-modal-clear-button");

// ========================
// App State
// ========================
let cart = [];
let buttonsDom = [];


// ========================
// Product Data Handler
// ========================
class Products {
  getProducts() {
    return productsData;
  }
}


// ========================
// UI Handler
// ========================
class UI {
  // render all products on the page
  displayProducts(products) {
    let result = "";

    products.forEach((item) => {
      result += `
      <article class="product-grid__card">
        <div class="product__image">
          <img src=${item.imageUrl} alt="">
        </div>
        <div class="product__content">
          <div class="product__title"><p>${item.title}</p></div>
          <div class="product__price"><p>${item.price}</p></div>
          <button class="product__addtocart-btn" data-id=${item.id}>
            <span class="add-icon-btn fa-solid fa-cart-shopping"></span>Add to Cart
          </button>
        </div>
      </article>`;
    });

    productsDOM.innerHTML = result;
  }

  // attach logic to Add to Cart buttons
  getAddtoCartBtns() {
    const addToCartBtns = [...document.querySelectorAll(".product__addtocart-btn")];
    buttonsDom = addToCartBtns;

    addToCartBtns.forEach(btn => {
      const id = btn.dataset.id;

      // disable button if product is already in cart
      const isInCart = cart.find(p => p.id === parseInt(id));
      if (isInCart) {
        btn.innerHTML = `<i class="add-icon-btn fa-solid fa-tag"></i> Added to Cart`;
        btn.disabled = true;
      }

      // button click handler
      btn.addEventListener("click", (event) => {
        const clickedBtn = event.currentTarget;

        // visually change button
        clickedBtn.innerHTML = `<i class="add-icon-btn fa-solid fa-tag"></i> Added to Cart`;
        clickedBtn.disabled = true;

        // get product data and add to cart
        const addedProduct = { ...Storage.getProductById(id), quantity: 1 };
        cart = [...cart, addedProduct];

        // save to storage and update UI
        Storage.saveCart(cart);
        this.setCartValue(cart);
        this.addCartItem(addedProduct);
      });
    });
  }

  // update cart total price and item count
  setCartValue(cart) {
    let tempCartItem = 0;
    const totalPrice = cart.reduce((acc, cur) => {
      tempCartItem += cur.quantity;
      return acc + cur.quantity * cur.price;
    }, 0);

    cartTotal.innerText = `${totalPrice.toFixed(2)} $`;
    cartCounts.innerText = tempCartItem;
  }

  // render a single product in cart modal
  addCartItem(cartItem) {
    const div = document.createElement("div");
    div.classList.add("cart-modal__product");
    div.innerHTML = `
      <div class="cart-modal__product-details">
        <div class="cart-modal__product-image"><img src=${cartItem.imageUrl} alt=""></div>
        <div class="cart-modal__product-titleprice">
          <div class="cart-modal__product-title"><p>${cartItem.title}</p></div>
          <div class="cart-modal__product-price"><p>${cartItem.price} $</p></div>
        </div>
      </div>
      <div class="cart-modal__product-acctions">
        <button class="cart-modal__product-decrease-button btn action"><i class="fa-solid fa-minus" data-id="${cartItem.id}"></i></button>
        <div class="cart-modal__product-quantity"><p>${cartItem.quantity}</p></div>
        <button class="cart-modal__product-increase-button btn action"><i class="fa-solid fa-plus" data-id="${cartItem.id}"></i></button>
        <button class="cart-modal__product-remove-button btn action"><i class="fa-solid fa-trash" data-id="${cartItem.id}"></i></button>
      </div>
    `;
    cartContent.appendChild(div);
  }

  // initialize cart state on page load
  setUpApp() {
    cart = Storage.getCart() || [];
    cart.forEach(item => this.addCartItem(item));
    this.setCartValue(cart);
  }

  // manage cart interaction logic
  cartLogic() {
    // clear all items
    clearCart.addEventListener("click", () => this.clearCart());

    // cart interaction: increase, decrease, remove
    cartContent.addEventListener("click", (event) => {
      const target = event.target;

      // increase quantity
      if (target.classList.contains('fa-plus')) {
        const item = cart.find(c => c.id == target.dataset.id);
        item.quantity++;
        this.setCartValue(cart);
        Storage.saveCart(cart);

        const qty = target.closest(".cart-modal__product-acctions").querySelector(".cart-modal__product-quantity p");
        if (qty) qty.innerText = item.quantity;

        // remove item from cart
      } else if (target.classList.contains('fa-trash')) {
        const removedItem = cart.find(c => c.id == target.dataset.id);
        this.removeItem(removedItem.id);
        Storage.saveCart(cart);

        const productDiv = target.closest(".cart-modal__product");
        cartContent.removeChild(productDiv);

        // decrease quantity
      } else if (target.classList.contains('fa-minus')) {
        const item = cart.find(c => c.id == target.dataset.id);
        if (item.quantity === 1) {
          this.removeItem(item.id);
          cartContent.removeChild(target.closest(".cart-modal__product"));
        } else {
          item.quantity--;
          this.setCartValue(cart);
          Storage.saveCart(cart);

          const qty = target.closest(".cart-modal__product-acctions").querySelector(".cart-modal__product-quantity p");
          if (qty) qty.innerText = item.quantity;
        }
      }
    });
  }

  // clear all items from cart
  clearCart() {
    cart.forEach(c => this.removeItem(c.id));

    while (cartContent.children.length) {
      cartContent.removeChild(cartContent.children[0]);
    }

    showHideModalForm();
  }

  // remove product from cart array & UI
  removeItem(id) {
    cart = cart.filter(c => c.id !== id);
    this.setCartValue(cart);
    Storage.saveCart(cart);
    this.getSingleButton(id); // re-enable "Add to Cart" button
  }

  // re-enable "Add to Cart" button when item is removed
  getSingleButton(id) {
    const button = buttonsDom.find(btn => parseInt(btn.dataset.id) === parseInt(id));
    button.innerHTML = `<i class="add-icon-btn fa-solid fa-cart-shopping"></i> Add to Cart`;
    button.disabled = false;
  }
}


// ========================
// Local Storage Handler
// ========================
class Storage {
  static saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }

  static getProductById(id) {
    const all = JSON.parse(localStorage.getItem("products")) || [];
    return all.find(p => p.id === parseInt(id));
  }

  static saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  static getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
  }
}


// ========================
// App Initialization
// ========================
document.addEventListener("DOMContentLoaded", () => {
  const products = new Products();
  const ui = new UI();
  const productsList = products.getProducts();

  ui.setUpApp(); // set cart UI state
  ui.displayProducts(productsList); // show products
  ui.getAddtoCartBtns(); // handle cart button logic
  ui.cartLogic(); // handle cart interactions
  Storage.saveProducts(productsList); // store product list in localStorage
});


// ========================
// Modal Logic
// ========================
showModalBtn.addEventListener("click", showHideModalForm);
closeModalBtn.addEventListener("click", showHideModalForm);

function showHideModalForm() {
  modalForm.classList.toggle("hidden");
}
