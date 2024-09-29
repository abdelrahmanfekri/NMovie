import EmptyComponent from "@/components/EmptyComponent";
import MovieCard from "@/components/MovieCard";
import { searchMovie } from "@/lib/data";
import React from "react";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  return {
    title: `NMovie - Search: ${searchParams.q}`,
    description: `Search results for ${searchParams.q}`,
  };
}

export default async function page({
  searchParams,
}: {
  searchParams: {
    q: string;
  };
}) {
  const results = await searchMovie(searchParams.q);
  if (!results || results.length === 0) {
    return (
      <EmptyComponent
        title="No results found"
        description="Try use search keywords"
      />
    );
  }
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
