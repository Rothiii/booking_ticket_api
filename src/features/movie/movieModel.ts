export type CreateMovieRequest = {
  name: string
  genre: string
  language: string
};

export type UpdateMovieRequest = {
  id_movie: number
  name: string
  genre: string
  language: string
};