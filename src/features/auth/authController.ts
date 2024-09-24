import { Request, Response, NextFunction } from "express";
import { AuthService } from "./authService";
import { UserToken } from "../../models";

export class AuthController {
  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { phone_number, password } = req.body;
      const token = await AuthService.login({ phone_number, password });
      return res.status(200).json({
        success: true,
        data: { ...token },
        message: "login successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, password, address, phone_number } = req.body;
      await AuthService.register({ name, password, address, phone_number });
      return res.status(201).json({
        success: true,
        message: "Register successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  static async createAdmin(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, password, address, phone_number } = req.body;
      await AuthService.createAdmin({ name, password, address, phone_number });
      return res.status(201).json({
        success: true,
        message: "Admin created successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  static async currentLoggedIn(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const user = res.locals.user;
      const data = await AuthService.currentLoggedIn(user.phone_number);
      return res.status(200).json({
        success: true,
        data,
        message: "Current logged in user",
      });
    } catch (error) {
      next(error);
    }
  }
}
