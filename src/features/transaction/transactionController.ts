import { Request, Response, NextFunction } from "express";
import { TransactionService } from "./transactionService";

export class TransactionController {
  static async createTransaction(req: Request, res: Response, next: NextFunction) {
    try {
      const { code_discount, id_ticket, quantity } = req.body;
      const { id_user } = res.locals.user;
      const transaction = await TransactionService.createTransaction({
        code_discount,
        id_ticket,
        id_user,
        quantity,
      });
      return res.status(201).json({
        success: true,
        data: transaction,
        message: "Transaction created successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  static async getTotalRevenueToday(req: Request, res: Response, next: NextFunction) {
    try {
      const totalRevenue = await TransactionService.getTotalRevenueToday();
      return res.status(200).json({
        success: true,
        data: totalRevenue,
        message: "Total revenue retrieved successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  static async topUpBalance(req: Request, res: Response, next: NextFunction) {
    try {
      const { id_user, amount } = req.body;;
      await TransactionService.topUpBalance({ id_user, amount });
      return res.status(200).json({
        success: true,
        message: "Balance topped up successfully",
      });
    } catch (error) {
      next(error);
    }
  }
}