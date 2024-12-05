import { Request, Response, NextFunction } from "express";
import { RatingService } from "./ratingService";

export class RatingController {
  static async createRating(req: Request, res: Response, next: NextFunction) {
    try {
      const user = res.locals.user;
      const { id_movie, rating, comments } = req.body;
      const data = await RatingService.createRating({
        id_user: user.id_user,
        id_movie,
        rating,
        comments,
      });
      return res.status(201).json({
        success: true,
        data,
        message: "Rating created successfully",
      });
    } catch (error) {
      next(error);
    }
  }
}
