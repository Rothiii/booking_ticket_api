import { Router } from "express";
import { TransactionController } from "./transactionController";
import { JwtMiddleware } from "../../middlewares";

const transactionRoute = Router();

transactionRoute.post("/", [
  JwtMiddleware.verifyToken,
  TransactionController.createTransaction,
]);

transactionRoute.get("/revenueToday", [
  JwtMiddleware.verifyToken,
  TransactionController.getTotalRevenueToday,
]);

export default transactionRoute;
