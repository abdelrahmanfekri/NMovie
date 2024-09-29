import FavoritesMovieList from "@/components/MovieList";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "NMovie - Favorites",
  description: "Your favorite movies",
};

export default function page() {
  return (
    <div className="container">
      <h1>Favorites</h1>
      <FavoritesMovieList />
    </div>
  );
}
