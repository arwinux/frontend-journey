export default class TransactionStats {
  constructor(transactions) {
    this.transactions = transactions;
  }

  total() {
    return this.transactions.length;
  }

  numberOfTotal(shown = []) {
    return `${shown.length} از ${this.transactions.length} تراکنش`;
  }

  depositCount() {
    return this.getDeposits().length;
  }

  withdrawalCount() {
    return this.getWithdrawals().length;
  }

  totalAmount() {
    return this.sumAmount(this.transactions);
  }

  depositAmount() {
    return this.sumAmount(this.getDeposits());
  }

  depositPercent() {
    return this.percentOfTotal(this.depositCount());
  }

  withdrawalPercent() {
    return this.percentOfTotal(this.withdrawalCount());
  }

  getDeposits() {
    return this.transactions.filter((txn) => txn.isDeposit());
  }

  getWithdrawals() {
    return this.transactions.filter((txn) => !txn.isDeposit());
  }

  sumAmount(list) {
    let sum = 0;
    list.forEach((txn) => {
      sum += txn.amount;
    });
    return sum;
  }

  percentOfTotal(count) {
    return ((count / this.total()) * 100).toFixed(0);
  }
}
