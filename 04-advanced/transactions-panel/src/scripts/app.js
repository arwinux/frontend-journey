let allProducts = [];


class Product {
  constructor(id, type, price, refid, date) {
    this.id = id;
    this.type = type;
    this.price = price;
    this.refid = refid;
    this.date = date;
  }
}

class ProductServices {
  static setupApiClient() {
    return axios.create({
      baseURL: 'http://localhost:3000',
    });
  }

  static async getProducts() {
    try {
      const { data } = await this.setupApiClient().get('/transactions');
      return data.map(product => new Product(
        product.id,
        product.type,
        product.price,
        product.refId,
        product.date,
      ));

    }
    catch (error) {
      console.log(error);
    }
  }
}

class FilterProduct {

  static async getDescfilterPrice() {
    try {
      const { data } = await axios.get('http://localhost:3000/transactions?_sort=price&_order=desc');
      return data.map(product => new Product(
        product.id,
        product.type,
        product.price,
        product.refId,
        product.date,
      ));

    } catch (error) {
      console.log(error);
    }
  }

  static async getAscfilterPrice() {
    try {
      const { data } = await axios.get('http://localhost:3000/transactions?_sort=price&_order=asc');
      return data.map(product => new Product(
        product.id,
        product.type,
        product.price,
        product.refId,
        product.date,
      ));

    } catch (error) {
      console.log(error);
    }
  }

  static async getDescfilterDate() {
    try {
      const { data } = await axios.get("http://localhost:3000/transactions?_sort=date&_order=desc");
      return data.map(product => new Product(
        product.id,
        product.type,
        product.price,
        product.refId,
        product.date,
      ));

    } catch (error) {
      console.log(error);
    }
  }

  static async getAscfilterDate() {
    try {
      const { data } = await axios.get("http://localhost:3000/transactions?_sort=date&_order=asc");
      return data.map(product => new Product(
        product.id,
        product.type,
        product.price,
        product.refId,
        product.date,
      ));

    } catch (error) {
      console.log(error);
    }
  }

}

class SearchProduct {
  static async searchProductInput(inputText) {
    try {
      const { data } = await axios.get(`http://localhost:3000/transactions?q=${inputText}`);
      return data.map(product => new Product(
        product.id,
        product.type,
        product.price,
        product.refId,
        product.date,
      ));

    } catch (error) {
      console.log(error);
    }
  }
}

class ProdcutStatics {
  static productDepositeStatic(allproducts) {
    return allproducts.filter(product => product.type === "افزایش اعتبار");
  }

  static productWithdrawalStatic(allproducts) {
    return allproducts.filter(product => product.type === "برداشت از حساب");
  }

  static productALLLStatic(allproducts) {
    return allproducts;
  }

  static productTotalPriceStatic(allproducts) {
    let count = 0;
    allproducts.map(e => {
      count += e.price;
    });

    return count;
  }
}

class Ui {
  static renderProducs(products) {
    let result = "";

    products.forEach(item => {
      result +=
        `
       <div class="transactions-panel__grid-table-item">
           <div class="table-body-item">
             <div class="number-badge">${item.id}</div>
             <span class="lable-item">ردیف</span>
           </div>
           <div class="table-body-item">
             <span class="badge ${this.setTransactionsTypeStyle(item.type)}">${item.type}</span>
             <span class="lable-item">نوع تراکنش</span>
           </div>
           <div class="table-body-item">
             <span class="price ${this.setTransactionsPriceStyle(item.type)}">${this.seperateNumbersInPersian(item)}</span>
             <span class="lable-item">مبلغ</span>
           </div>
           <div class="table-body-item">
             <span class="badge type-blue type-id">${item.refid}</span>
             <span class="lable-item">شماره پیگیری</span>
           </div>
           <div class="table-body-item">
             <span class="badge type-green">${this.convertDate(item.date)[1]}</span>
             <span class="lable-item">تاریخ</span>
           </div>
           <div class="table-body-item">
             <span class="day badge status-yellow">${this.convertDate(item.date)[0]}</span>
             <span class="lable-item">روز</span>
           </div>
           <div class="table-body-item">
             <span class="clock badge type-red">${this.convertDate(item.date)[2]}</span>
             <span class="lable-item">زمان</span>
           </div>
         </div>
      `;
    });

    return result;
  }

  static filterPriceProduct() {
    const orderPriceBtn = document.querySelector(".order-price");
    const orderIconBtn = orderPriceBtn.querySelector(".btn-icon");


    orderPriceBtn.addEventListener("click", async () => {
      const transactionsTable = document.querySelector(".transactions-panel__grid-table-body");
      const isCurrentlyAscending = orderIconBtn.classList.contains("rotated-180");

      if (isCurrentlyAscending) {
        allProducts = await FilterProduct.getDescfilterPrice();
        orderIconBtn.classList.remove("rotated-180");

      } else {
        allProducts = await FilterProduct.getAscfilterPrice();
        orderIconBtn.classList.add("rotated-180");
      }


      transactionsTable.innerHTML = this.renderProducs(allProducts);
    });
  }

  static filterDateProduct() {
    const orderDateBtn = document.querySelector(".order-date");
    const orderIconBtn = orderDateBtn.querySelector(".btn-icon");


    orderDateBtn.addEventListener("click", async () => {
      const transactionsTable = document.querySelector(".transactions-panel__grid-table-body");
      const isCurrentlyAscending = orderIconBtn.classList.contains("rotated-180");

      if (isCurrentlyAscending) {
        allProducts = await FilterProduct.getDescfilterDate();
        orderIconBtn.classList.remove("rotated-180");

      } else {
        allProducts = await FilterProduct.getAscfilterDate();
        orderIconBtn.classList.add("rotated-180");
      }


      transactionsTable.innerHTML = this.renderProducs(allProducts);
    });
  }

  static searchInputProduct() {
    const transactionsTable = document.querySelector(".transactions-panel__grid-table-body");
    const searchInput = document.getElementById("search-input");

    searchInput.addEventListener("input", async () => {
      allProducts = await SearchProduct.searchProductInput(searchInput.value);
      console.log(searchInput.value);
      transactionsTable.innerHTML = this.renderProducs(allProducts);
    });
  }

  static StaticNumberProduct() {

    const allStats = document.querySelector(".all-transaction");
    const depositeStats = document.querySelector(".deposite-transactions");
    const withdrawalStats = document.querySelector(".withdrawal-transactions");
    const totalpriceStats = document.querySelector(".totalprice-transactions");

    allStats.innerText = ProdcutStatics.productALLLStatic(allProducts).length.toLocaleString("fa-IR");
    depositeStats.innerText = ProdcutStatics.productDepositeStatic(allProducts).length.toLocaleString("fa-IR");
    withdrawalStats.innerText = ProdcutStatics.productWithdrawalStatic(allProducts).length.toLocaleString("fa-IR");
    totalpriceStats.innerText = ProdcutStatics.productTotalPriceStatic(allProducts).toLocaleString("fa-IR");



  }

  static setupLoadButton() {
    const uploadTransactions = document.querySelector(".upload-transactions");
    const transactionsTable = document.querySelector(".transactions-panel__grid-table-body");
    const transactions = document.querySelector(".transactions");


    uploadTransactions.addEventListener("click", () => {
      transactionsTable.innerHTML = this.renderProducs(allProducts);
      transactions.classList.remove("hidden");
      uploadTransactions.classList.add("hidden");
      Ui.StaticNumberProduct();

    });
  }

  static setTransactionsTypeStyle(type) {
    if (type === "افزایش اعتبار") {
      return "type-deposit";
    }
    else if (type === "برداشت از حساب") {
      return "type-withdrawal";
    }
  }

  static setTransactionsPriceStyle(type) {
    if (type === "افزایش اعتبار") {
      return "green-color";
    }
    else if (type === "برداشت از حساب") {
      return "red-color";
    }
  }

  static seperateNumbersInPersian(item) {
    const persianNumber = item.price.toLocaleString("fa-IR");

    if (item.type === "افزایش اعتبار") {
      return `${persianNumber} +`;
    }
    else if (item.type === "برداشت از حساب") {
      return `${persianNumber} -`;
    }
  }

  static convertDate(dateId) {
    const date = new Date(dateId);


    const readableDate = date.toLocaleString("fa-IR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      weekday: "long",
    });


    // return `ساعت ${readableDate.split(",")[1]}`;
    // return data;
    return [readableDate.split(",")[0].split(" ")[0], readableDate.split(",")[0].split(" ")[1], readableDate.split(",")[1],];

  }
}


class App {
  static async init() {
    allProducts = await ProductServices.getProducts();
    Ui.setupLoadButton();
    Ui.filterPriceProduct();
    Ui.filterDateProduct();
    Ui.searchInputProduct();

  }
}

document.addEventListener("DOMContentLoaded", () => {
  App.init();

});
