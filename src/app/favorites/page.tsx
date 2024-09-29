"use client";
import MovieCard from "@/components/MovieCard";
import { useFavoritesStore } from "@/store/favorites";
import React from "react";

export default function page() {
  const favorites = useFavoritesStore((state) => state.favorites);
  return (
    <div className="container">
      <h1>Favorites</h1>
      <div className="movie-list">
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
