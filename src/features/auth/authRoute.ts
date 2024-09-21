import { Router } from "express";
import { JwtMiddleware } from "../../middlewares/jwt_middleware";
import { AuthController } from "./authController";

const authRoute: Router = Router();

authRoute.post("/login", AuthController.login);
authRoute.get("/me", [
  JwtMiddleware.verifyToken,
  AuthController.currentLoggedIn,
]);
authRoute.post("/register", AuthController.register);
authRoute.post("/createAdmin", [
  JwtMiddleware.verifyToken,
  AuthController.createAdmin,
]);

export default authRoute;
