import MovieCard from "@/components/MovieCard";
import { searchMovie } from "@/lib/data";
import React from "react";

export default async function page({
  searchParams,
}: {
  searchParams: {
    q: string;
  };
}) {
  const results = await searchMovie(searchParams.q);
  return (
    <section className="container">
      <h1>Search Results</h1>
      <div className="movie-list">
        {results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
