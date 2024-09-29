import { getMovieList } from "@/lib/data";
import { MovieType } from "@/types";
import MovieCard from "@/components/MovieCard";
import Pagination from "@/components/Pagination";

export default async function Home({
  searchParams,
}: {
  searchParams?: { page?: number };
}) {
  const { page } = searchParams || {};
  const { movies, totalPages } = await getMovieList(page || 1);
  return (
    <div className="container">
      <section className="movie-list">
        {movies.map((movie: MovieType) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </section>
      <Pagination page={page || 1} totalPages={totalPages} />
    </div>
  );
}
