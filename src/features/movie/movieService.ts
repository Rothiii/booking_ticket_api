import { executeQuery } from "../../database/connection";
import { CreateMovieRequest, UpdateMovieRequest } from "./movieModel";

export class MovieService {
  static async createMovie(data: CreateMovieRequest) {
    const { name, genre, language } = data;
    const query = "CALL CreateMovie(?, ?, ?)";
    const dataInput = [name, genre, language];
    const results = await executeQuery(query, dataInput);
    return results;
  }

  static async getMovie() {
    const query = "CALL GetMovies()";
    const results = await executeQuery(query);
    return results;
  }

  // static async getMovieByName(Name: string) {
  //   const query = "CALL GetMovieByName(?)";
  //   const results = await executeQuery(query, [id]);
  //   return results;
  // }

  static async updateMovie(data: UpdateMovieRequest) {
    const { id_movie, name, genre, language } =
      data;
    const query = "CALL UpdateMovie(?, ?, ?, ?, ?, ?, ?, ?)";
    const results = await executeQuery(query, [
      id_movie,
      name,
      genre,
      language,
    ]);
    return results;
  }

  static async deleteMovie(id_movie: string) {
    const query = "CALL DeleteMovie(?)";
    const results = await executeQuery(query, [id_movie]);
    return results;
  }
}
