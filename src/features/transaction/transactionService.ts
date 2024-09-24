import { executeQuery } from "../../database/connection";
import { CreateTransactionRequest } from "./transactionModel";
import { ErrorResponse } from "../../models";

export class TransactionService {
  static async createTransaction(data: CreateTransactionRequest) {
    const { id_ticket, id_user, quantity } = data;
    const code_discount = data.code_discount || null;

    const query = "CALL CreateTransaction(?, ?, ?, ?);";
    const dataInput = [id_ticket, id_user, quantity, code_discount];
    await executeQuery(query, dataInput);
    console.log(data);
    return data;
  }

  static async getTotalRevenueToday() {
    const query = "SELECT GetRevenueToday() AS revenueToday;";
    const result = await executeQuery(query);
    return result;
  }
}
