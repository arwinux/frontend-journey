export default class Transaction {
  constructor(data) {
    this.id = data.id;
    this.type = data.type;
    this.amount = Number(data.price);
    this.refId = String(data.refId);
    this.date = Transaction.dateFormat(data.date);
    this.day = Transaction.dayFormat(data.date);
    this.time = Transaction.timeFormat(data.date);
  }

  isDeposit() {
    return this.type === "افزایش اعتبار";
  }

  static amountFormatted(number) {
    return Intl.NumberFormat("fa-IR").format(number);
  }

  static dateFormat(timestamp) {
    return new Date(timestamp).toLocaleDateString("fa-IR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  }

  static dayFormat(timestamp) {
    return new Date(timestamp).toLocaleDateString("fa-IR", {
      weekday: "long",
    });
  }

  static timeFormat(timestamp) {
    return new Date(timestamp).toLocaleTimeString("fa-IR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }
}
