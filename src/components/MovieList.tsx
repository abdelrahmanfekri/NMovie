"use client";
import { useFavoritesStore } from "@/store/favorites";
import React from "react";
import MovieCard from "./MovieCard";
import EmptyComponent from "./EmptyComponent";

export default function FavoritesMovieList() {
  const favorites = useFavoritesStore((state) => state.favorites);
  if (favorites.length === 0) {
    return (
      <EmptyComponent
        title="No favorites"
        description="You have no favorite movies."
      />
    );
  }
  return (
    <div className="movie-list">
      {favorites.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
