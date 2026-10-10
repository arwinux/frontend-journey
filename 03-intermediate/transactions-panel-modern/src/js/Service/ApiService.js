import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export default class ApiService {
  static async getTransactions() {
    const response = await api.get("/transactions");
    return response.data;
  }

  static async searchTransactions(refId) {
    const response = await api.get("/transactions", {
      params: { refId_like: refId },
    });
    return response.data;
  }

  static async sortTransactions(field, order) {
    const response = await api.get("/transactions", {
      params: { _sort: field, _order: order },
    });
    return response.data;
  }
}
