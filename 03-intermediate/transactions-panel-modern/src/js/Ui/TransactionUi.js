import TransactionTable from "./TransactionTable.js";
import StatsBoard from "./StatsBoard.js";

export default class TransactionUi {
  constructor(service) {
    this.service = service;
    this.table = new TransactionTable();
    this.statsBoard = new StatsBoard();

    this.uploadButton = document.querySelector(".upload-transactions");
    this.uploadIcon = document.querySelector(".fa-upload");
    this.loadingIcon = document.querySelector(".loading-icon");
    this.loadingPanel = document.querySelector(".panel__loading");
    this.dashboard = document.querySelector(".panel__dashboard");
    this.bubbles = document.querySelectorAll(".background__bubble");
    this.searchInput = document.querySelector(".search-input");
    this.tableContainer = document.querySelector(".transactions-grid");
  }

  init() {
    this.setupUploadButton();
    this.setupSearch();
    this.setupSort();
  }

  setupUploadButton() {
    this.uploadButton.addEventListener("click", async () => {
      this.showLoadingIcon();

      try {
        await this.service.loadTransactions();
        this.showDashboard();
        this.refresh();
        this.showTable();
        this.statsBoard.render(
          this.service.getStats(),
          this.service.shownTransactions,
        );
      } catch (error) {
        console.log(error.message);
      }
    });
  }

  setupSearch() {
    let timer = null;

    this.searchInput.addEventListener("input", () => {
      clearTimeout(timer);

      timer = setTimeout(async () => {
        try {
          await this.service.searchTransactions(this.searchInput.value);
        } catch (error) {
          console.error(error.message);
        }

        this.showTable();
        this.refresh();
      }, 300);
    });
  }

  setupSort() {
    this.tableContainer.addEventListener("click", async (event) => {
      let field = null;

      if (event.target.closest(".sort-price")) field = "price";
      if (event.target.closest(".sort-date")) field = "date";

      if (field === null) return;

      try {
        await this.service.sortTransactions(field);
      } catch (error) {
        console.log(error.message);
      }

      this.showTable();
      this.refresh();
    });
  }

  showTable() {
    this.table.render(
      this.service.shownTransactions,
      this.service.sortField,
      this.service.sortOrder,
    );
  }

  refresh() {
    this.table.render(
      this.service.shownTransactions,
      this.service.sortField,
      this.service.sortOrder,
    );

    this.statsBoard.render(
      this.service.getStats(),
      this.service.shownTransactions,
    );
  }

  showLoadingIcon() {
    this.uploadIcon.classList.add("hidden");
    this.loadingIcon.classList.remove("hidden");
  }

  showDashboard() {
    this.loadingPanel.classList.add("hidden");
    this.dashboard.classList.remove("hidden");

    this.bubbles.forEach((bubble) => {
      bubble.classList.add("bubble-white");
    });
  }
}
