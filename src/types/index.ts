export interface MovieType {
  id: string;
  title: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
}

export interface MovieDetails extends MovieType {
  synopsis: string;
  home_page: string;
  genres: { id: string; name: string }[];
  director: { name: string; image_path: string };
  cast: { name: string; character: string; image_path: string }[];
  runtime: number;
}
