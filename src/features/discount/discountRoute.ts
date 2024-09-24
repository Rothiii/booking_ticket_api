import { Router } from "express";
import { DiscountController } from "./discountController";
import { JwtMiddleware } from "../../middlewares";

const discountRoute = Router();

discountRoute.post("/", [
  JwtMiddleware.verifyToken,
  DiscountController.createDiscount,
]);
discountRoute.get("/", [
  JwtMiddleware.verifyToken,
  DiscountController.getDiscount,
]);
discountRoute.put("/:code_discount", [
  JwtMiddleware.verifyToken,
  DiscountController.updateDiscount,
]);
discountRoute.delete("/:code_discount", [
  JwtMiddleware.verifyToken,
  DiscountController.deleteDiscount,
]);

export default discountRoute;