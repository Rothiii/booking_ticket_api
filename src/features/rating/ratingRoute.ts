import { Router } from "express";
import { RatingController } from "./ratingController";
import { JwtMiddleware } from "../../middlewares/jwt_middleware";

const ratingRoute: Router = Router();

ratingRoute.post("/", [
  JwtMiddleware.verifyToken,
  RatingController.createRating,
]);

export default ratingRoute;