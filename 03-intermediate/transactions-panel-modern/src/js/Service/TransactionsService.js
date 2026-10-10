import ApiService from "./ApiService.js";
import Transaction from "../Model/Transaction.js";
import TransactionStats from "./TransactionStats.js";

export default class TransactionsService {
  constructor() {
    this.allTransactions = [];
    this.shownTransactions = [];
    this.sortField = null;
    this.sortOrder = "asc";
  }

  async loadTransactions() {
    const list = await ApiService.getTransactions();

    this.allTransactions = this.createTransactions(list);
    this.shownTransactions = this.allTransactions.slice();
  }

  async searchTransactions(text) {
    if (text.trim() === "") {
      this.shownTransactions = this.allTransactions.slice();
      return;
    }

    const list = await ApiService.searchTransactions(text);
    this.shownTransactions = this.createTransactions(list);
  }

  async sortTransactions(field) {
    if (this.sortField === field) {
      this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";
    } else {
      this.sortField = field;
      this.sortOrder = "asc";
    }

    const list = await ApiService.sortTransactions(field, this.sortOrder);
    this.shownTransactions = this.createTransactions(list);
  }

  getStats() {
    return new TransactionStats(this.allTransactions);
  }

  createTransactions(list) {
    return list.map((item) => new Transaction(item));
  }

  getShownTransactions() {
    return this.shownTransactions;
  }
}
