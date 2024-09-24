import { Request, Response, NextFunction } from "express";
import { ErrorResponse } from "../models";
import jwt from "jsonwebtoken";
import { UserToken } from "../models/token_model";

export class JwtMiddleware {
  static async verifyToken(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) {
        throw new ErrorResponse("Unauthorized", 401, ["token"], "UNAUTHORIZED");
      }
      const decoded = jwt.verify(token, process.env.JWT_SECRET!);
      res.locals.user = decoded as UserToken;
      next();
    } catch (error) {
      next(error);
    }
  }

  static async adminOnly(req: Request, res: Response, next: NextFunction) {
    try {
      const user = res.locals.user;
      if (user.role !== "admin") {
        throw new ErrorResponse("Forbidden", 403, ["role"], "FORBIDDEN");
      }
      next();
    } catch (error) {
      next(error);
    }
  }
}
