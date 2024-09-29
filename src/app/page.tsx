import { getMovieList } from "@/lib/data";
import { MovieType } from "@/types";
import MovieCard from "@/components/MovieCard";
import Pagination from "@/components/Pagination";
import EmptyComponent from "@/components/EmptyComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NMovie - Home",
  description:
    "NMovies is a movie database website. Find your favorite movies here. Search for movies, view movie details, and more.",
};

export default async function Home({
  searchParams,
}: {
  searchParams?: { page?: number };
}) {
  const { page } = searchParams || {};
  const { movies, totalPages } = await getMovieList(page || 1);
  if (!movies || movies.length === 0) {
    return (
      <EmptyComponent
        title="No movies found"
        description="There are no movies available at the moment."
      />
    );
  }
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
