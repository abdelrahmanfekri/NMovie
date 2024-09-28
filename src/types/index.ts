export interface MovieType {
  id: string;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

export interface MovieDetails extends MovieType {
  synopsis: string;
  genres: { id: string; name: string }[];
  director: string;
  cast: { name: string; character: string }[];
  runtime: number;
}