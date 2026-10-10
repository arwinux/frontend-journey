import Transaction from "../Model/Transaction.js";

export default class TransactionTable {
  constructor() {
    this.container = document.querySelector(".transactions-grid");
  }

  render(transactions, sortField, sortOrder) {
    let html = this.createHead(sortField, sortOrder);

    transactions.forEach((txn) => {
      html += this.createRow(txn);
    });

    this.container.innerHTML = html;
  }

  getSortIcon(column, sortField, sortOrder) {
    if (column === sortField && sortOrder === "desc") {
      return "up";
    }
    return "down";
  }

  createHead(sortField, sortOrder) {
    const priceIcon = this.getSortIcon("price", sortField, sortOrder);
    const dateIcon = this.getSortIcon("date", sortField, sortOrder);

    return `<div class="transaction-thead">
        <div>ردیف</div>
        <div>نوع تراکنش</div>
        <button class="btn-sort sort-price">
          مبلغ
          <i class="fa-solid fa-arrow-${priceIcon} sort-price-icon"></i>
        </button>
        <div>شماره پیگیری</div>
        <button class="btn-sort sort-date">
          تاریخ تراکنش
          <i class="fa-solid fa-arrow-${dateIcon} sort-date-icon"></i>
        </button>
        <div>روز</div>
        <div>زمان</div>
      </div>`;
  }

  createRow(txn) {
    const isDeposit = txn.isDeposit();
    const statusClass = isDeposit ? "stat--in" : "stat--out";
    const arrow = isDeposit ? "up" : "down";
    const sign = isDeposit ? "+" : "-";
    const typeText = isDeposit ? "افزایش" : "کاهش";

    return `
        <article class="transaction row">
          <div class="grid-item" data-l="ردیف">
            <span class="idx">${txn.id}</span>
          </div>

          <div class="grid-item" data-l="نوع تراکنش">
            <span class="chip ${statusClass}">
              <i class="fa-solid fa-arrow-${arrow}"></i>
              ${typeText} اعتبار
            </span>
          </div>

          <span data-l="مبلغ" class="amount grid-item ${statusClass}">
            <div>
              <small>${sign}</small> ${Transaction.amountFormatted(txn.amount)}
            </div>
          </span>

          <div class="grid-item" data-l="شماره پیگیری">
            <span class="track-number">${txn.refId}</span>
          </div>

          <div class="grid-item" data-l="تاریخ">
            <span class="date">${txn.date}</span>
          </div>

          <div class="grid-item" data-l="روز">
            <span class="day">${txn.day}</span>
          </div>

          <div class="grid-item" data-l="زمان">
            <span class="time">${txn.time}</span>
          </div>
        </article>`;
  }
}
