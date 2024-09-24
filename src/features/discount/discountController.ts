import { Request, Response, NextFunction } from "express";
import { DiscountService } from "./discountService";

export class DiscountController {
  static async createDiscount(req: Request, res: Response, next: NextFunction) {
    try {
      const { code_discount, value_discount, description, start_date, end_date } = req.body;
      const discountData = await DiscountService.createDiscount({
        code_discount,
        value_discount,
        description,
        start_date,
        end_date,
      });
      return res.status(201).json({
        success: true,
        data: { value_discount: discountData },
        message: "Discount created successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  static async getDiscount(req: Request, res: Response, next: NextFunction) {
    try {
      const value_discount = await DiscountService.getDiscounts();
      return res.status(200).json({
        success: true,
        data: { value_discount },
        message: "Discount retrieved successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  static async updateDiscount(req: Request, res: Response, next: NextFunction) {
    try {
      const { code_discount } = req.params;
      const { value_discount, description, start_date, end_date } = req.body;
      const discountData = await DiscountService.updateDiscount({
        code_discount,
        value_discount,
        description,
        start_date,
        end_date,
      });
      return res.status(200).json({
        success: true,
        data: { value_discount: discountData },
        message: "Discount updated successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteDiscount(req: Request, res: Response, next: NextFunction) {
    try {
      const { code_discount } = req.params;
      await DiscountService.deleteDiscount(code_discount);
      return res.status(200).json({
        success: true,
        message: "Discount deleted successfully",
      });
    } catch (error) {
      next(error);
    }
  }
}
