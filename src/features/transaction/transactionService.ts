import { executeQuery } from "../../database/connection";
import { CreateTransactionRequest, TopUpBalanceRequest } from "./transactionModel";
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
    const query = "CALL GetRevenueToday()";
    const result = await executeQuery(query);
    return result[0][0];
  }

  static async topUpBalance(data: TopUpBalanceRequest) {
    const { id_user, amount } = data;
    const query = "CALL TopUpBalance(?, ?)";
    const dataInput = [id_user, amount];
    const result = await executeQuery(query, dataInput);
    return result[0]
  }
}
