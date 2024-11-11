import { Request, Response, NextFunction } from "express";
import { MovieService } from "./movieService";

export class MovieController {
  static async createMovie(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, genre, language } = req.body;
      const movie = await MovieService.createMovie({
        name,
        genre,
        language,
      });
      return res.status(201).json({
        success: true,
        data: movie,
        message: "Movie created successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  static async getMovie(req: Request, res: Response, next: NextFunction) {
    try {
      let movie;
      const user = res.locals.user
      if(user.role === "admin") {
        movie = await MovieService.getMovies();
      } else if (user.role === "user") {
        movie = await MovieService.getMoviesUser();
      }
      return res.status(200).json({
        success: true,
        data: movie,
        message: "Movie fetched successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  static async updateMovie(req: Request, res: Response, next: NextFunction) {
    try {
      const { id_movie } = req.params;
      const { name, genre, language } = req.body;
      const movie = await MovieService.updateMovie({
        id_movie: Number(id_movie),
        name,
        genre,
        language,
      });
      return res.status(200).json({
        success: true,
        data: { ...movie },
        message: "Movie updated successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteMovie(req: Request, res: Response, next: NextFunction) {
    try {
      const { id_movie } = req.params;
      await MovieService.deleteMovie(id_movie);
      return res.status(200).json({
        success: true,
        message: "Movie deleted successfully",
      });
    } catch (error) {
      next(error);
    }
  }
}
