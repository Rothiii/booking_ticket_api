import { executeQuery } from "../../database/connection";
import { ErrorResponse } from "../../models";
import { CreateDiscountRequest, UpdateDiscountRequest } from "./discountModel";

export class DiscountService {
  static async createDiscount(data: CreateDiscountRequest) {
    const { code_discount, value_discount, description, start_date, end_date} = data;
    const query = "CALL CreateDiscount(?, ?, ?, ?, ?);";
    const dataInput = [code_discount, description, value_discount, start_date, end_date];
    await executeQuery(query, dataInput);
    return data;
  }

  static async updateDiscount(data: UpdateDiscountRequest) {
    const { code_discount, value_discount, description, start_date, end_date} = data;

    const query = "CALL UpdateDiscount(?, ?, ?, ?, ?);";
    const dataInput = [code_discount, value_discount, description, start_date, end_date];
    await executeQuery(query, dataInput);
    return data;
  }

  static async deleteDiscount(code: string) {
    const query = "CALL DeleteDiscount(?);";
    const dataInput = [code];
    await executeQuery(query, dataInput);
    return code;
  }

  static async getDiscounts() {
    const query = "SELECT * FROM Discounts;";
    const result = await executeQuery(query);
    return result[0];
  }

  static async getDiscountByCode(code: string) {
    const query = "SELECT * FROM Discounts WHERE code = ?;";
    const dataInput = [code];
    const result = await executeQuery(query, dataInput);
    return result[0][0];
  }
}