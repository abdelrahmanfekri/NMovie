import { getMovieList } from "@/lib/data";
import { MovieType } from "@/types";
import MovieCard from "@/components/MovieCard";

export default async function Home() {
  const movies: [MovieType] = await getMovieList(1);
  return (
    <section id="movie-list">
      {movies.map((movie: MovieType) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </section>
  );
}
