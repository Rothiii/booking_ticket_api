import { executeQuery } from "../../database/connection";
import {
  CreateTransactionRequest,
  TopUpBalanceRequest,
} from "./transactionModel";
import { ErrorResponse } from "../../models";

export class TransactionService {
  static async createTransaction(data: CreateTransactionRequest) {
    const { id_ticket, id_user, quantity } = data;
    const code_discount = data.code_discount || null;

    const query = "CALL CreateTransactionTester(?, ?, ?, ?, @total_price);";
    const dataInput = [id_ticket, id_user, quantity, code_discount];

    await executeQuery(query, dataInput);

    const resultQuery = "SELECT @total_price AS total_price;";
    const result = await executeQuery(resultQuery);

    return {
      ...data,
      total_price: result[0].total_price, // Kembalikan total price
    };
  }

  static async getTotalRevenueToday() {
    const query = "CALL GetRevenueToday()";
    const result = await executeQuery(query);
    return result[0][0];
  }

  static async topUpBalance(data: TopUpBalanceRequest) {
    const { id_user, amount } = data;
    const query = "CALL TopUpBalance(?, ?)";
    const dataInput = [id_user, amount];
    const result = await executeQuery(query, dataInput);
    return result[0];
  }
}
