import TransactionsService from "./Service/TransactionsService.js";
import TransactionUi from "./Ui/TransactionUi.js";

document.addEventListener("DOMContentLoaded", () => {
  const service = new TransactionsService();
  const ui = new TransactionUi(service);

  ui.init();
});
