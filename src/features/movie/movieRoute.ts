import { Router } from "express";
import { JwtMiddleware } from "../../middlewares/jwt_middleware";
import { MovieController } from "./movieController";

const movieRoute: Router = Router();

movieRoute.post("/", [
  JwtMiddleware.verifyToken,
  MovieController.createMovie,
]);

movieRoute.get("/", [
  JwtMiddleware.verifyToken,
  MovieController.getMovie,
]);

// movieRoute.get("/:name", [
//   JwtMiddleware.verifyToken,
//   MovieController.getMovieByName,
// ]);

movieRoute.patch("/:id_movie", [
  JwtMiddleware.verifyToken,
  MovieController.updateMovie,
]);

movieRoute.delete("/:id_movie", [
  JwtMiddleware.verifyToken,
  MovieController.deleteMovie,
]);

export default movieRoute;