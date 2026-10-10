import Transaction from "../Model/Transaction.js";
import TransactionsService from "../Service/TransactionsService.js";
import TransactionStats from "../Service/TransactionStats.js";

export default class StatsBoard {
  constructor() {
    this.total = document.querySelector(".stat-price");
    this.depositCount = document.querySelector(".deposit");
    this.withdrawalCount = document.querySelector(".withdrawal");
    this.totalAmount = document.querySelector(".stat-sumtxn");
    this.depositAmount = document.querySelector(".flow__net");

    this.depositMeter = document.querySelector(".deposit-percent");
    this.withdrawalMeter = document.querySelector(".withdrawal-percent");

    this.depositLabel = document.querySelector(".flow-green-number");
    this.withdrawalLabel = document.querySelector(".flow-red-number");
    this.depositBar = document.querySelector(".flow__green");
    this.withdrawalBar = document.querySelector(".flow__red");
    this.resultTrans = document.querySelector(".result-count");
  }

  render(stats,shownTransactions) {
    const depositPercent = stats.depositPercent() + "%";
    const withdrawalPercent = stats.withdrawalPercent() + "%";

    this.total.textContent = stats.total();
    this.depositCount.textContent = stats.depositCount();
    this.withdrawalCount.textContent = stats.withdrawalCount();
    this.totalAmount.textContent = Transaction.amountFormatted(
      stats.totalAmount(),
    );
    this.depositAmount.textContent = Transaction.amountFormatted(
      stats.depositAmount(),
    );

    this.depositMeter.style.width = depositPercent;
    this.withdrawalMeter.style.width = withdrawalPercent;

    this.depositLabel.textContent = depositPercent;
    this.withdrawalLabel.textContent = withdrawalPercent;
    this.depositBar.style.width = depositPercent;
    this.withdrawalBar.style.width = withdrawalPercent;

    this.resultTrans.textContent = stats.numberOfTotal(shownTransactions);
    
  }
}
